import football from 'lib/football/football';

export const FETCH_LEAGUES_START = 'leagues/fetch_leagues_start';
export const FETCH_LEAGUES_COMPLETE = 'leagues/fetch_leagues_complete';
export const FETCH_LEAGUES_FAILED = 'leagues/fetch_leagues_failed';
export const SET_CURRENT_LEAGUE = 'leagues/set_current_league';

const initialState = {
	currentLeague: null,
	leagues: null,
};

const fetchLeagues = (dispatch, getState) => {
	football.getCompeitions().then(
		leagues => dispatch({ type: FETCH_LEAGUES_COMPLETE, payload: leagues }),
		error => dispatch({ type: FETCH_LEAGUES_FAILED, payload: error }),
	);
};

export const setCurrentLeague = league => {
	return dispatch => dispatch({ 
		type: SET_CURRENT_LEAGUE, payload: league 
	});
}

export const fetchLeaguesAction = () => { return fetchLeagues };

export default (state = initialState, action) => {
	switch (action.type) {
	case FETCH_LEAGUES_START: {
		return state;
	}
	case FETCH_LEAGUES_FAILED: {
		return {
			...state,
			errors: action.payload,
		};
	}
	case FETCH_LEAGUES_COMPLETE: {
		return {
			...state,
			leagues: action.payload,
		};
	}
	case SET_CURRENT_LEAGUE: {
		return {
			...state,
			currentLeague: action.payload,
		};
	}
	default:
		return state;
	}
};
