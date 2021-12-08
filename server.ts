import express from 'express';

import { resolve } from "path";
import { setupReactViews } from "express-tsx-views";


const app = express();

setupReactViews(app, {
	viewsDirectory: resolve(__dirname, 'views'),
	prettify: true,
});

app.engine('tsx', require('express-react-views').createEngine());

app.get('/', (req, res) => {
	const props = { title: 'HELLO REACT', lang: 'eng' };
	res.render('MainPage', props);
});

app.listen(process.env.PORT || 8000, () => {
	console.log('> Ready on http://localhost:8000');
});
