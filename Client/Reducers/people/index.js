import { combineReducers } from 'redux';

import people from './people';
import loading from './loading';
import hasMore from './hasMore';

export default combineReducers({
	people,
	loading,
	hasMore
});