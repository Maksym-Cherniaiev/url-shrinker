export const isValidUrl = (userFullUrl: string) => {
	let url;

	try {
		url = new URL(userFullUrl);
	} catch (_) {
		return false;  
	}

	return url.protocol === 'http:' || url.protocol === 'https:';
}