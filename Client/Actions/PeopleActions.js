import Axios from '../Axios';
import _ from 'lodash';

export const ADD_PEOPLE = 'ADD_PEOPLE';
export const RESET_PEOPLE = 'RESET_PEOPLE';
export const SET_PEOPLE_LOADING = 'SET_PEOPLE_LOADING';
export const SET_PEOPLE_HAS_MORE = 'SET_PEOPLE_HAS_MORE';

export const getPeople = (page = 1) => {
	let url = `/people/`;
	let params = Object.assign({}, {
		page: page
	});
	return Axios.get(url, {
		params: params
	}).then((res) => {
		let people = res.data.results;
		people = people.map((person) => {
			person.height = parseInt(person.height);
			person.mass = parseInt(person.mass);
			let parts = person.homeworld.split('/');
    		let planetId = parts.pop() || parts.pop();
    		person.planetId = parseInt(planetId);
			return person;
		});
		return {
			type: ADD_PEOPLE,
			payload: res.data.results
		};
	}).catch((err) => {
		console.log(err);
	});
}

export const sortPeople = (type, people = [], integer = false) => {
	let sorted = _.sortBy(people, type);
	return {
		type: ADD_PEOPLE,
		payload: sorted
	};
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