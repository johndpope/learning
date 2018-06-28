import * as CONSTANTS from './constants';

export const fetchAndUpdateState = (options) => {

	fetch(`${CONSTANTS.API_URL}?limit=${options.limit}&offset=${options.offset}`)
	  .then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				throw new Error("Error fetching");
			}
		})
	  .then((data) => {
	  	console.log(data);
	  	options.setState(data, options.offset);
	  })
	  .catch((error) => {
	  	console.error(error);
	  });
}