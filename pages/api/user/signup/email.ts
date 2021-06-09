import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import jwt from 'jsonwebtoken';
import dbConnect from '../../../../lib/database/db-connect';
import { User, PendingUser, UserPwd } from '../../../../lib/database/models';

type defineToken = {
  userId: string
}
type response = {
  email: string,
  userId: string
}

const emailSignupHandler = nc<NextApiRequest, NextApiResponse<response|null>>();

emailSignupHandler.post(async (req, res) => {
  try {
    dbConnect();
    if (process.env.JWT_PRIVATE_KEY) {
      const { token } = req.body;
      const payload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      const pendingUser = await PendingUser.findOne({ email: (payload as defineToken).userId });
      const user = await User.findOne({
        email: (payload as defineToken).userId,
      });
      if (pendingUser && !user) {
        const {
          _id, username, email, password,
        } = pendingUser;

        const { _id: newUserId } = await User.create({
          username,
          email,
          accountType: 'mail',
        });
        await UserPwd.create({
          userId: newUserId,
          userPwdHash: password,
        });
        await PendingUser.findByIdAndDelete(_id);
        return res.json({ email, userId: newUserId });
      } if (pendingUser && user) {
        const {
          _id, password, email,
        } = pendingUser;
        const { _id: userId } = user;
        await UserPwd.findOneAndUpdate({ _id: userId }, { password }, { new: true });
        await PendingUser.findByIdAndDelete(_id);
        return res.json({ email, userId });
      }
    }

    return res.send(null);
    // throw new Error('Something went wrong with your registration. Try again');
  } catch (err) {
    console.log('signup-user-email-err', err);
    return res.send(null);
  }
});

export default emailSignupHandler;
