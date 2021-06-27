import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from "next-auth/client"
import nc from 'next-connect';
import _ from 'lodash';
import dbConnect from '../../../../lib/database/db-connect';
import { Show, Episode } from '../../../../lib/database/models';
import { IUser, EpisodeProps, IEpisode } from '../../../../types/app.d';

interface IEpisodeCategory {
	_id: String;
	episodeTitle: String;
	episodeDescription: String;
	episodeAudioUrl: String;
	episodeLogo: String;
	episodeSlug: String;
	showSlug: String;
	isInUserPlaylist?: boolean;
}

const episodeCategoryHandler = nc<NextApiRequest, NextApiResponse>();

episodeCategoryHandler.post(async (req, res) => {
	const { categoryName } = req.body;
	if(categoryName){
		try{
		dbConnect();
		const session = await getSession({ req })
		const shows = await Show.find({ showCategory: categoryName })
		const episodes = await Episode.find({ episodeCategory: categoryName })
			
			const repp = episodes.map(episode => {
				const updateEpisode:IEpisodeCategory = _.pick(episode,['_id','episodeTitle','episodeDescription','episodeAudioUrl','episodeLogo','episodeSlug','showSlug' ])
				updateEpisode.isInUserPlaylist = session?.user.playlist.some(id => id == updateEpisode._id);
				return updateEpisode;
			})
		return res.json(repp);
		// console.log(shows);
	}
	catch(err) {
		console.log("episodeCategoryHandler",err);
	}

	}
	return res.json({error: 'Invalid request'});
})

export default episodeCategoryHandler;