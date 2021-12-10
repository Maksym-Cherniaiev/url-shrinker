import React from 'react';
import { IUrlCardProps } from '../../interfaces/urlInterface';

import { urlStyles } from '../stylesheet/url-shortener-styles';
import { DeleteUrlIcon } from './DeleteUrlIcon';


export const UrlCard = ({ urlData }: IUrlCardProps): JSX.Element => {
	const { id, full_url, short_url } = urlData;

	return <div style={ urlStyles.url }>
		<div style={ urlStyles.urlId }>{ id }</div>
		<a style={ urlStyles.fullUrl } href={ short_url }>{ full_url }</a>
		<a style={ urlStyles.shortUrl } href={ short_url }>{ short_url }</a>

		<form method='POST' action={`delete/${ id }`}>
			<button type='submit'><DeleteUrlIcon /></button>
		</form>
	</div>;
};
