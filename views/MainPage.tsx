import React from 'react';

import { ursShrinkerStyles } from './stylesheet/usl-shrinker-styles';


interface IMainPageProps {
	title: string,
	lang: string,
}

const MainPage = ({ title, lang }: IMainPageProps): JSX.Element => {
	return <div style={ursShrinkerStyles}>
		<h1>URL SHRINKER</h1>
		<div>{title}</div>
		<div>{lang}</div>
	</div>;
};

export default MainPage;
