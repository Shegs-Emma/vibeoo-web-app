import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from "next-auth/client"
import nc from 'next-connect';
import _ from 'lodash';
import dbConnect from '../../../../lib/database/db-connect';
import { Show, Episode, User } from '../../../../lib/database/models';
import { IUser, EpisodeProps, IEpisode } from '../../../../types/app.d';




const playlistHandler = nc<NextApiRequest, NextApiResponse>();

playlistHandler.get(async (req,res) => {
	try{
		dbConnect();
		const session = await getSession({ req })
		if(session){
			const currentUserId = session.user._id;
			const userPlaylist = await User.findById(currentUserId)
			.populate('playlist').select(['playlist']);
			// console.log('play',userPlaylist)
			return userPlaylist ? res.json(userPlaylist.playlist) : res.send([]);
		}
		return res.send([]);
	}
	catch(err){
		console.log(err);
	}
})

playlistHandler.post(async (req,res) => {
	try{
		dbConnect();
		const { userId, episodeId } = req.body;
		console.log(userId,episodeId)
		if(userId && episodeId){
			const user = await User.findByIdAndUpdate(userId,{
				$addToSet: {
					playlist: episodeId 
				}
			})
			
				return res.send('success');
			}
			return res.send(null);
	}
	catch(err){
		console.log(err);
		return res.send(null);
	}
})

playlistHandler.delete(async (req,res) => {
	try{
		dbConnect();
		const { userId, episodeId } = req.body;
		console.log(userId,episodeId)
		if(userId && episodeId){
			const user = await User.findByIdAndUpdate(userId,{
				$pull: {
					playlist: episodeId 
				}
			})
			
				return res.send('success');
			}
			return res.send(null);
	}
	catch(err){
		console.log(err);
		return res.send(null);
	}
})


export default playlistHandler;