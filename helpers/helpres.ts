export const MAX_SHORT_URL_LENGTH = 8;

export const SHORTENED_URL_DOMAIN = 'https://example.com/';

export const ERROR_MESSAGES = {
    invalidUrl: 'Please provide a valid URL',
    insecureUrl: 'Youre URL address is insecure, please provide a secure URL',
    long_urlExists: 'This URL has already been added, plaase provide another URL',
    short_urlExists: 'This short text has already been added, please provide another text',
    noError: '',
};

export const URL_TYPE = {
    short: 'short_url',
    long: 'full_url',
};
