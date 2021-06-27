import _ from 'lodash';
import dbConnect from '../../database/db-connect';
import { Show } from '../../database/models';

const getShowSlugs = async() => {
	try{
		dbConnect();
		const shows = await Show.find().select(['showSlug','-_id']);
		const showSlugs = _.uniq(_.map(shows, 'showSlug'));
		// console.log('showslug',showSlugs)
		return showSlugs;
	}
	catch(err){
		return [];
		console.log("showSlugHelper",err)
	}
}

const getShowViaSlug = async(showSlug: string) => {
	try{
		dbConnect();
		const show = await Show.findOne({ showSlug }).select(['-_id']);
		// console.log('showviaslug',show)
		return JSON.stringify(show);
		// console.log(shows);
	}
	catch(err) {
		console.log("showViaSlugHelper",err)
	}
}

const getShowCategories = async() => {
	try{
		dbConnect();
		const shows = await Show.find().select(['showCategory','-_id']);
		const showCategories = _.uniq(_.map(shows, 'showCategory'));
		// console.log('showcat',showCategories)
		if(showCategories.length) return ['all', ...showCategories];
		return showCategories;
		// console.log(shows);
	}
	catch(err) {
		console.log("showCategoryHandler",err)
	}
} 

export { getShowSlugs, getShowViaSlug, getShowCategories }