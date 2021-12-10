import randomstring from 'randomstring';
import { MAX_SHORT_URL_LENGTH, SHORTENED_URL_DOMAIN } from './helpres';
import { createShortUrlType } from '/interfaces/types';


export const createShortUrl: createShortUrlType = (userShortUrlText) => {
    const userCreatedShortUrl = `${ SHORTENED_URL_DOMAIN }${ userShortUrlText }`;
    const randomCreatedShortUrl = `${ SHORTENED_URL_DOMAIN }${ randomstring.generate(MAX_SHORT_URL_LENGTH) }`;

    const shortenedUrl = userShortUrlText !== ''
        ? userCreatedShortUrl
        : randomCreatedShortUrl;

    return shortenedUrl;
};
