import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import leagues from './leagues';
import tables from './tables';

export default combineReducers({
	routing: routerReducer,
	leagues,
	tables,
});
