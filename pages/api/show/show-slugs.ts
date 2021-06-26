import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import _ from 'lodash';
import dbConnect from '../../../lib/database/db-connect';
import { Show } from '../../../lib/database/models';

const showSlugHandler = nc<NextApiRequest, NextApiResponse>();

showSlugHandler.get(async (req, res) => {
	try{
		dbConnect();
		const shows = await Show.find().select(['showSlug','-_id']);
		const showSlugs = _.uniq(_.map(shows, 'showSlug'));
		return res.json(showSlugs);
		// console.log(shows);
	}
	catch(err) {
		console.log("showSlugHandler",err)
	}
})

showSlugHandler.post(async (req, res) => {
	try{
		dbConnect();
		const show = await Show.findOne({ showSlug: req.body.showSlug });
		return res.json(show);
		// console.log(shows);
	}
	catch(err) {
		console.log("showSlugHandler",err)
	}
})

export default showSlugHandler;