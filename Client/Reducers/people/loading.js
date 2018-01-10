import { SET_PEOPLE_LOADING } from '../../Actions/PeopleActions';

const loading = (state = false, action) => {
	switch(action.type){
		case SET_PEOPLE_LOADING:
			return action.payload;
			break;
		default:
			return state;
	}
}

export default loading;