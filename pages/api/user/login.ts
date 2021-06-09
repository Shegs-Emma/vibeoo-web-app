import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../lib/database/db-connect';
import { User, PendingUser, UserPwd } from '../../../lib/database/models';

const loginHandler = nc<NextApiRequest, NextApiResponse>();

loginHandler.post(async (req, res) => {
  try {
    dbConnect();
    const userId = await User.findOne({
      email: req.body.email,
    }).select('_id');
    if (userId) {
      const userPwd = await UserPwd.findOne({
        userId,
      });
      if (userPwd) {
        const comparePassword = await userPwd.compareUserPwd(req.body.password);
        if (!comparePassword) {
          throw new Error('Wrong login details');
        }
      }

      return res.send(userId);
    }
    const pendingUserId = await PendingUser.findOne({
      email: req.body.email,
    }).select('_id');
    if (pendingUserId) {
      throw new Error('You are yet to confirm your email. Please check your mail');
    }
    throw new Error('Wrong login details');
  } catch (err) {
    console.log('login-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default loginHandler;
