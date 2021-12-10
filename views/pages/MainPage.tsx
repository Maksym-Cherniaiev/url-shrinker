import React from 'react';
import { IMainPageProps } from '../../interfaces/urlInterface';
import { UrlListHeader, UrlCard } from '../components';

import {
	urlShortenerStyles,
	shortenerTitle,
	urlStyles,
	form,
	longUrlInput, 
	shortUrlInput,
	inputLabel, 
	submit,
} from '../stylesheet/url-shortener-styles';
import { MAX_SHORT_URL_LENGTH } from '../../helpers/helpres';


const MainPage = ({ urls }: IMainPageProps): JSX.Element => {
	return <div style={urlShortenerStyles}>
		<h1 style={shortenerTitle}>Url Shortener</h1>

		<form style={form} method='POST' action='createShortUrl'>

			<div style={longUrlInput}>
				<label
					style={inputLabel}
					htmlFor='init-url'>Initial URL</label>
				<input
					id='init-url'
					type='text'
					name='fullUrl'
					placeholder='Place a valid URL here'
				/>
			</div>

			<div style={shortUrlInput}>
				<label
					style={inputLabel}
					htmlFor='short-url'>Short URL</label>
				<input
					id='short-url'
					type='text'
					name='shortUrl'
					placeholder='Provide short text for new URL'
					maxLength={MAX_SHORT_URL_LENGTH}
				/>
			</div>

			<button
				style={submit}
				type='submit'>Get Short Url</button>

		</form>

		<div style={urlStyles.urlList}>
			<UrlListHeader />
			{urls.length > 0 && urls.map((url) => <UrlCard key={url.id} urlData={url} />)}
		</div>
	</div>;
};

export default MainPage;
