import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import dbConnect from '../../../../lib/database/db-connect';
import { User } from '../../../../lib/database/models';

const getUserHandler = nc<NextApiRequest, NextApiResponse>();

getUserHandler.get(async (req, res) => {
  try {
    dbConnect();
    const user = await User.findOne({
      _id: req.query.userId,
    });
    return user ? res.send(user) : res.send(null);
  } catch (err) {
    return res.send(null);
  }
});

export default getUserHandler;
