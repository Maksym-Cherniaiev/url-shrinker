import React from 'react';
import { urlListHeader, urlStyles } from '../stylesheet/url-shortener-styles';


export const UrlListHeader = (): JSX.Element => <div style={urlListHeader}>
    <div style={urlStyles.urlId}>ID</div>
    <div style={urlStyles.fullUrl}>Initial URL</div>
    <div style={urlStyles.shortUrl}>Shortened URL</div>
    <div style={urlStyles.deleteUrl}>Delete URL</div>
</div>;
