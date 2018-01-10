import { SET_PEOPLE_HAS_MORE } from '../../Actions/PeopleActions';

const hasMore = (state = true, action) => {
	switch(action.type){
		case SET_PEOPLE_HAS_MORE:
			return action.payload;
			break;
		default:
			return state;
	}
}

export default hasMore;