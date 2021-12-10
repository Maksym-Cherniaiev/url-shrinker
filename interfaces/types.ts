export type getAllDataFrom = () => Promise<any>;
export type removeUrlData = (id: string) => void;
export type urlShortener = (fullUrl: string, shortUrl: string) => void;
export type getUrlByItsShortValue = (shortUrl: string) => Promise<string>;
