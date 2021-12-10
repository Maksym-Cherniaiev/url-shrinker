import { Pool } from 'pg';
import { connectParams } from './connect-params';

import {
	getAllDataFrom,
	removeUrlData,
	urlShortener,
	getUrlByItsShortValue,
} from '../interfaces/types';
import { IUrlCardProps } from '../interfaces/urlInterface';
import { createShortUrlReplacer } from '../helpers';


export const getAllUrlDataFrom: getAllDataFrom = async () => {
	const client = new Pool(connectParams);
	client.connect();

	try {
		const query = `SELECT * FROM urls`;
		const { rows } = await client.query(query);
		const urlsList = rows.map((urlsData: IUrlCardProps) => urlsData);

		client.end();

		return urlsList;
	} catch (err) {
		return err.stack;
	}
};

export const removeUrl: removeUrlData = async (id) => {
	const client = new Pool(connectParams);
	client.connect();

	try {
		const query = `DELETE FROM urls WHERE id = ${ id }`;
		await client.query(query);

		client.end();

		return;
	} catch (err) {
		return err.stack;
	}
};

export const shortenUrl: urlShortener = async (fullUrl, shortUrl) => {
	const client = new Pool(connectParams);
	client.connect();

	try {
		const query = `
			INSERT INTO urls (id,full_url,short_url)
			VALUES (default,'${ fullUrl }','${ createShortUrlReplacer(shortUrl) }')
		`;

		await client.query(query);

		client.end();

		return;
	} catch (err) {
		return err.stack;
	}
};

export const getFullUrlByItsShortValue: getUrlByItsShortValue = async (shortUrl) => {
	const client = new Pool(connectParams);
	client.connect();

	try {
		const query = `SELECT DISTINCT full_url FROM urls WHERE short_url = '${ shortUrl }' FETCH FIRST ROW ONLY`;

		const { rows } = await client.query(query);
		const { full_url } = rows[0];

		client.end();

		return full_url;
	} catch (err) {
		return err.stack;
	}
};
