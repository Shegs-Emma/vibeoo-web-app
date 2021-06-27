import axios from 'axios';

const appUrl = process.env.NODE_ENV === 'production' ? 'https://vibeoo.vercel.app' : 'http://localhost:3000'

export const getShowCategories = async () => {
	const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/show/categories`);
	if(response.data.length) return ['all', ...response.data];
	return response.data;
}

export const getShowSlugs = async () => {
	const response = await axios.get(`${process.env.NEXTAUTH_URL}/api/show/show-slugs`);
	return response.data;
}

export const getCategoryAllEpisodes = async (category:string) => {
	const response = await axios({
		method: 'POST',
		url:`${appUrl}/api/show/categories/all-episodes`,
		data: {categoryName: category.toLowerCase()}
	})
	return response.data;
}

export const getShowViaSlug = async (showSlug:string) => {
	const response = await axios({
		method: 'POST',
		url:`${appUrl}/api/show/show-slugs`,
		data: {showSlug: showSlug.toLowerCase()}
	})
	console.log('sluugy',response.data)
	return response.data;
}