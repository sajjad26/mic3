import { SET_PLANET_LOADING } from '../../Actions/PlanetActions';

const loading = (state = false, action) => {
	switch(action.type){
		case SET_PLANET_LOADING:
			return action.payload;
			break;
		default:
			return state;
	}
}

export default loading;