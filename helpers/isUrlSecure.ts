export const isUrlSecure = (userFullUrl: string) => {
	const url = new URL(userFullUrl);

    const urlSecure = url.protocol === 'https:'
        ? 'noError'
        : 'insecureUrl';

	return urlSecure;
}