import fire from '../fire';
import _omit from 'lodash.omit';

const gameReducerDefaultState = [];
const gameReducer = (state = gameReducerDefaultState, action) => {
	switch(action.type) {
		case 'ADD_GAME_INSTANCE':
			fire.database().ref(action.game.id)
				.set(
					_omit(action.game, ['id'])
				);
			return [
				...state,
				action.game
			];
		default:
			return state;
	}
};

export default gameReducer;