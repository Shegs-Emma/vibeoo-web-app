import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import _ from 'lodash';
import dbConnect from '../../../../lib/database/db-connect';
import { Show, Episode } from '../../../../lib/database/models';

const showCategoryHandler = nc<NextApiRequest, NextApiResponse>();

showCategoryHandler.get(async (req, res) => {
	try{
		dbConnect();
		const shows = await Show.find().select(['showCategory','-_id']);
		const showCategories = _.uniq(_.map(shows, 'showCategory'));
		res.json(showCategories);
		// console.log(shows);
	}
	catch(err) {
		console.log("showCategoryHandler",err)
	}
})

export default showCategoryHandler;