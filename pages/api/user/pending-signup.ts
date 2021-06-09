import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../lib/database/db-connect';
import { User, PendingUser, UserPwd } from '../../../lib/database/models';

const handler = nc<NextApiRequest, NextApiResponse>();

handler.post(async (req, res) => {
  try {
    dbConnect();
    const { email, token } = req.body;
    const userId = await User.findOne({
      email,
    }).select('_id');
    if (userId) {
      throw new Error('Email already taken');
    } else {
      const pendingUserId = await PendingUser.findOne({
        email,
      }).select('_id');
      if (pendingUserId) {
        throw new Error('You are yet to confirm your email. Please check your mail');
      }
      // else {
      //   const addToPendingUser = await PendingUser.create({
      //     username,
      //     email,
      //     password,
      //   });
      //   await addToPendingUser.hashUserPwd();
      //   await addToPendingUser.save();
      //   return res.send(true);
      // }
    }
  } catch (err) {
    console.log('signup-user-err', err);
    return res.json({
      error: true,
      errorMessage: err.message,
    });
  }
});

export default handler;
