import {
	invalidUrl,
	isUrlSecure,
	checkIfUrlExists,
} from './index';
import { ERROR_MESSAGES, URL_TYPE } from './helpres'; 
import { checkUrlForErrors } from '/interfaces/types';


export const errorsCheck: checkUrlForErrors = async (longUrl, shortUrl) => {
	let errorMessage = '';

	const isUrlValid = invalidUrl(longUrl);
	errorMessage = ERROR_MESSAGES[isUrlValid];

	const isUrlInsecure = isUrlSecure(longUrl);
	errorMessage = ERROR_MESSAGES[isUrlInsecure];

	const isUrlNew = await checkIfUrlExists(longUrl, URL_TYPE.long) as keyof typeof ERROR_MESSAGES;
	errorMessage = ERROR_MESSAGES[isUrlNew];

	const isShortUrlNew = await checkIfUrlExists(shortUrl, URL_TYPE.short) as keyof typeof ERROR_MESSAGES;
	errorMessage = ERROR_MESSAGES[isShortUrlNew];

	return errorMessage;
};
