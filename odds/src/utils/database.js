import fire from '../fire';

/*
 * Retrieves id from 
 */
export const getGameDataFromId = (id) => {
	const reference = fire.database().ref(id);
	return reference.once('value');
}