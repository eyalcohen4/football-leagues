import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import leagues from './leagues';
import tables from './tables';
import teams from './teams';

export default combineReducers({
	routing: routerReducer,
	leagues,
	tables,
	teams,
});
