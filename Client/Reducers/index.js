import { combineReducers } from 'redux';
import people from './people';
import planet from './planet';

export default combineReducers({
	people,
	planet
});