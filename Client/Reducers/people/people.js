import { ADD_PEOPLE, RESET_PEOPLE } from '../../Actions/PeopleActions';

const people = (state = [], action) => {
	switch(action.type){
		case ADD_PEOPLE:
			return [
				...state,
				...action.payload
			];
			break;
		case RESET_PEOPLE:
			return [];
			break;
		default:
			return state;
	}
};

export default people;