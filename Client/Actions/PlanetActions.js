import Axios from '../Axios';

export const ADD_PLANET = 'ADD_PLANET';
export const RESET_PLANET = 'RESET_PLANET';
export const SET_PLANET_LOADING = 'SET_PLANET_LOADING';

export const getPlanet = (id = 1) => {
	let url = `/planets/${id}`;
	return Axios.get(url, {
		params: {}
	}).then((res) => {
		return {
			type: ADD_PLANET,
			payload: res.data
		};
	}).catch((err) => {
		console.log(err);
	});
}

export const resetPlanet = () => {
	return {
		type: RESET_PLANET
	}
}

export const setPlanetLoading = (state = false) => {
	return {
		type: SET_PLANET_LOADING,
		payload: state
	}
}

export const setPlanetHasMore = (state = false) => {
	return {
		type: SET_PLANET_HAS_MORE,
		payload: state
	}
}