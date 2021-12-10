import express from 'express';

import { resolve } from "path";
import { setupReactViews } from "express-tsx-views";
import { getAllUrlDataFrom, removeUrl, shortenUrl, getFullUrlByItsShortValue } from './database/pg-database';
import { isValidUrl } from './helpers';


const app = express();

setupReactViews(app, {
	viewsDirectory: resolve(__dirname, 'views'),
	prettify: true,
});

app.use(express.urlencoded({ extended: false }))
app.engine('tsx', require('express-react-views').createEngine());

app.get('/', async (req, res) => {
	const urls = await getAllUrlDataFrom();

	res.render('MainPage', { urls });
});

app.post('/createShortUrl', async (req, res) => {
	const { fullUrl, shortUrl } = req.body;

	if(isValidUrl(fullUrl)) {
		await shortenUrl(fullUrl, shortUrl);
	};

	res.redirect('/');
});

app.post('/delete/:urlId', async (req, res) => {
	const { urlId } = req.params;

	await removeUrl(urlId);

	res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
	const { shortUrl } = req.params;
	const fullUrl = await getFullUrlByItsShortValue(shortUrl);

	res.redirect(fullUrl);
});

app.listen(process.env.PORT || 8000, () => {
	console.warn('> Ready on http://localhost:8000');
});
