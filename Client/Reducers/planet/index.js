import { combineReducers } from 'redux';

import planet from './planet';
import loading from './loading';

export default combineReducers({
	planet,
	loading
});