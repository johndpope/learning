import generateId from '../utils/generateId';
export const addGameInstance = (
	{
		playerOne = '',
		playerTwo = '',
		challenge = '',
		mathMajor = ''
	}
) => ({
	type: 'ADD_GAME_INSTANCE',
	game: {
		id: generateId(),
		playerOne,
		playerTwo,
		challenge,
		mathMajor
	}
});
