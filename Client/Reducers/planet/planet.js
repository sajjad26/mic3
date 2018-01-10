import { ADD_PLANET, RESET_PLANET } from '../../Actions/PlanetActions';

const planet = (state = null, action) => {
	switch(action.type){
		case ADD_PLANET:
			return action.payload;
			break;
		case RESET_PLANET:
			return state;
			break;
		default:
			return state;
	}
};

export default planet;