import pool from '../database/pool';
import { checkIfUrlAlreadyAdded } from '/interfaces/types';


export const checkIfUrlExists: checkIfUrlAlreadyAdded = async (url, urlType) => {
	const query = `SELECT * FROM urls WHERE ${ urlType } = '${ url }'`;
	const { rows } = await pool.query(query);
	const isUrlFound = rows.length > 0;

	const errorType = isUrlFound
		? `${urlType}Exists`
		: 'noError';

	return errorType;
};
