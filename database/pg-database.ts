import pool from './pool';
import {
	getAllDataFrom,
	removeUrlData,
	urlShortener,
	getUrlByItsShortValue,
} from '../interfaces/types';
import { IUrlCardProps } from '../interfaces/urlInterface';
import { createShortUrl } from '../helpers';


export const getAllUrlDataFrom: getAllDataFrom = async () => {
	const query = `SELECT * FROM urls`;
	const { rows } = await pool.query(query);
	const urlsList = rows.map((urlsData: IUrlCardProps) => urlsData);

	return urlsList;
};

export const removeUrl: removeUrlData = async (id) => {
	const query = `DELETE FROM urls WHERE id = ${ id }`;
	await pool.query(query);

	return;
};

export const shortenUrl: urlShortener = async (fullUrl, shortUrl) => {
	const query = `
		INSERT INTO urls (id,full_url,short_url)
		VALUES (default,'${ fullUrl }','${ createShortUrl(shortUrl) }')
	`;

	await pool.query(query);

	return;
};

export const getFullUrlByItsShortValue: getUrlByItsShortValue = async (shortUrl) => {
	const query = `SELECT DISTINCT full_url FROM urls WHERE short_url = '${ shortUrl }' FETCH FIRST ROW ONLY`;

	const { rows } = await pool.query(query);
	const { full_url } = rows[0];

	return full_url;
};
