import { IUrlCardProps } from "./urlInterface";
import { ERROR_MESSAGES } from "/helpers/helpres";

export type getAllDataFrom = () => Promise<IUrlCardProps[]>;

export type removeUrlData = (id: string) => void;

export type urlShortener = (fullUrl: string, shortUrl: string) => void;

export type getUrlByItsShortValue = (shortUrl: string) => Promise<string>;

export type checkIfUrlAlreadyAdded = (url: string, urlType: string) => Promise<string>;

export type checkUrlForErrors = (longUrl: string, shortUrl: string) => Promise<string>;

export type createShortUrlType = (shortUrl: string) => string;

export type invalidUrlType = (userFullUrl: string) => keyof typeof ERROR_MESSAGES;
