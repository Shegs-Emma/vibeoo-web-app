import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../lib/database/db-connect';
import { User, PendingUser, UserPwd } from '../../../lib/database/models';
import sendSignupConfirmationLink from '../../../lib/nodemailer/signup-magic-link';

const mailerHandler = nc<NextApiRequest, NextApiResponse< boolean|{error: boolean, errorMessage: string}>>();

mailerHandler.post(async (req, res) => {
  const { email, username, password } = req.body;

  try {
    await dbConnect();
    const pendingUser = await PendingUser.findOne({
      email,
    });
    const user = await User.findOne({
      email,
    });
    if (user) {
    //   console.log('came');
      const { _id: userId } = user;
      const userPwd = await UserPwd.findOne({
        userId,
      });
      if (userPwd) {
        throw new Error('Email already taken');
      } else {
        if (pendingUser) {
          const { _id: pendingUserId } = pendingUser;
          await PendingUser.findByIdAndDelete(pendingUserId);
        }
        const createPendingUser = await PendingUser.create({
          email,
          password,
        });
        createPendingUser.hashUserPwd();
        const userToken = createPendingUser.generateToken();
        await createPendingUser.save();
        await sendSignupConfirmationLink({
          recipient: email as string,
          recipientUsername: username as string,
          token: userToken,
        });
      }
    } else {
      if (pendingUser) {
        const { _id: pendingUserId } = pendingUser;
        await PendingUser.findByIdAndDelete(pendingUserId);
      }
      const createPendingUser = await PendingUser.create({
        username,
        email,
        password,
      });
      await createPendingUser.hashUserPwd();
      const userToken = createPendingUser.generateToken();
      await createPendingUser.save();
      await sendSignupConfirmationLink({
        recipient: email as string,
        recipientUsername: username as string,
        token: userToken,
      });
    }
    return res.send(true);
  } catch (err) {
    console.log(err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default mailerHandler;
