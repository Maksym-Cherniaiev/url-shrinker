import React from 'react';
import { IErrorTypeProps } from '../../interfaces/urlInterface';


const ErrorPage = ({ errorType }: IErrorTypeProps): JSX.Element => <div>
    <h1>ERROR PAGE</h1>

    <div>{errorType}</div>

    <a href='/'>Go Back</a>
</div>;

export default ErrorPage;
