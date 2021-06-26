import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import _ from 'lodash';
import dbConnect from '../../../../lib/database/db-connect';
import { User, Episode } from '../../../../lib/database/models';
import { IUser, EpisodeProps } from '../../../../types/app.d';

interface IGetUser {
	email: String;
	profilePicture: String;
	showsFollowing: Array<String>;
	playlist: Array<EpisodeProps>;
	username: String;
	lastPlayed?: EpisodeProps;
}

const getUserHandler = nc<NextApiRequest, NextApiResponse>();

getUserHandler.get(async (req, res) => {
  try {
    dbConnect();
    const user = await User.findOne({
      _id: req.query.userId,
    });
    if(user){
    	const updateUser:IGetUser = _.pick(user,['_id','email','username','profilePicture','showsFollowing','playlist']);

    	if(user.playlist.length){
    		const selectLastAdded = user.playlist[user.playlist.length - 1];
    		const findEpisode = await Episode.findById(selectLastAdded);
    		updateUser.lastPlayed = findEpisode;
    		return res.json(updateUser);
    	}
    	const findEpisode = await Episode.findById('60d059fda5a5b1893876e04a').select(['-hostId','-episodePlayCount','-episodeSlug','-episodeCategory']);
    	updateUser.lastPlayed = findEpisode;
    	return res.json(updateUser);
    }
    return res.send(null);
  } catch (err) {
  	console.log(err)
    return res.send(null);
  }
});

export default getUserHandler;
