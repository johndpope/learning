/*
 * Returns a seven digit value based on the time right now.
 * This assumes two submit events won't be fired at the same time.
 * Should probably change this or just use npm uuid.
 */

const generateId = () => {
	return parseInt(Math.random()*1000000000, 10);
};

export default generateId;