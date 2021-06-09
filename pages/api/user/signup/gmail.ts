import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../../lib/database/db-connect';
import { User } from '../../../../lib/database/models';

const gmailSignupHandler = nc<NextApiRequest, NextApiResponse<Boolean|null>>();

gmailSignupHandler.post(async (req, res) => {
//   console.log('cammmme');
  try {
    // console.log('body', req.body);
    dbConnect();
    const user = await User.findOne({
      email: req.body.email,
    });
    if (user) {
      const { _id: userId } = user;
      return res.send(userId);
    }
    const { _id: newUserId } = await User.create({
      ...req.body,
      accountType: 'mail',
    });
    return res.send(newUserId);
  } catch (err) {
    console.log('signup-user-gmail-err', err);
    return res.send(null);
  }
});

export default gmailSignupHandler;
