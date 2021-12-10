import { invalidUrlType } from '/interfaces/types';


export const invalidUrl: invalidUrlType = (userFullUrl: string) => {
	let url;

	try {
		url = new URL(userFullUrl);
	} catch (_) {
		return 'invalidUrl';  
	}

	const { protocol } = url;

	const ivalidUrl = protocol === 'http:' || protocol === 'https:'
		? 'noError'
		: 'invalidUrl';

	return ivalidUrl;
};
