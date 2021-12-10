import randomstring from 'randomstring';
import { MAX_SHORT_URL_LENGTH } from './helpres';


export const createShortUrlReplacer = (shortUrl: string) => shortUrl
    ? shortUrl
    : randomstring.generate(MAX_SHORT_URL_LENGTH);