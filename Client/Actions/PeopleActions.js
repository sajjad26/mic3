import Axios from '../Axios';

export const ADD_PEOPLE = 'ADD_PEOPLE';
export const RESET_PEOPLE = 'RESET_PEOPLE';
export const SET_PEOPLE_LOADING = 'SET_PEOPLE_LOADING';
export const SET_PEOPLE_HAS_MORE = 'SET_PEOPLE_HAS_MORE';

export const getPeople = (page = 1, filters = {}) => {
	let url = `/people/`;
	let params = Object.assign({}, filters, {
		page: page
	});
	return Axios.get(url, {
		params: params
	}).then((res) => {
		return {
			type: ADD_PEOPLE,
			payload: res.data.results
		};
	}).catch((err) => {
		console.log(err);
	});
}

export const resetPeople = () => {
	return {
		type: RESET_PEOPLE
	}
}

export const setPeopleLoading = (state = false) => {
	return {
		type: SET_PEOPLE_LOADING,
		payload: state
	}
}

export const setPeopleHasMore = (state = false) => {
	return {
		type: SET_PEOPLE_HAS_MORE,
		payload: state
	}
}