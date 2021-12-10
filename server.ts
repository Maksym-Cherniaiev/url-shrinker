import express from 'express';

import { resolve } from "path";
import { setupReactViews } from "express-tsx-views";
import { getAllUrlDataFrom, removeUrl, shortenUrl, getFullUrlByItsShortValue } from './database/pg-database';
import { errorsCheck } from './helpers';


const app = express();

setupReactViews(app, {
	viewsDirectory: resolve(__dirname, 'views/pages'),
	prettify: true,
});

app.use(express.urlencoded({ extended: false }))
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.engine('tsx', require('express-react-views').createEngine());

app.get('/', async (req, res) => {
	const urls = await getAllUrlDataFrom();

	res.render('MainPage', { urls });
});

app.get('/error/:errorType', async (req, res) => {
	const { errorType } = req.params;
	console.log('errorType: ', errorType);

	res.render('ErrorPage', { errorType });
});

app.post('/createShortUrl', async (req, res) => {
	const { fullUrl, shortUrl } = req.body;
	const errorType = await errorsCheck(fullUrl, shortUrl);

	if(errorType !== '') {
		res.redirect(`/error/${ errorType }`);
		return;
	}

	await shortenUrl(fullUrl, shortUrl);

	res.redirect('/');
});

app.post('/delete/:urlId', async (req, res) => {
	// validate user input
	// helmet
	const { urlId } = req.params;

	await removeUrl(urlId);

	res.redirect('/');
});

app.get('/:shortUrl', async (req, res) => {
	const { shortUrl } = req.params;
	const fullUrl = await getFullUrlByItsShortValue(shortUrl);

	res.redirect(fullUrl);
});

app.listen(8000, () => {
	console.warn('> Ready on http://localhost:8000');
});
