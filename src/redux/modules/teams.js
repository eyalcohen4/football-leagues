import football from 'lib/football/football';

export const FETCH_TEAM_START = 'team/fetch_team_start';
export const FETCH_TEAM_COMPLETE = 'team/fetch_team_complete';
export const FETCH_TEAM_FAILED = 'team/fetch_team_failed';
export const SET_TEAM          = 'teams/set_team'

const initialState = {
	team: null,
	id: null,
};

const fetchCurrentTeam = (id) => {
	return (dispatch, getState) => { 
		dispatch({ type: FETCH_TEAM_START });

		football.getTeam(id).then(
			team => dispatch({ type: FETCH_TEAM_COMPLETE, payload: team }),
			error => dispatch({ type: FETCH_TEAM_FAILED, payload: error }),
		);
	}
};

const fetchFixtures = (url) => {

}

export const setCurrentTeam = team => {
	return dispatch => dispatch({ 
		type: SET_TEAM, 
		payload: team
	});
}

export const fetchTeamAction = id => dispatch => dispatch(fetchCurrentTeam(id));

export default (state = initialState, action) => {
	switch (action.type) {
	case FETCH_TEAM_START: {
		return state;
	}
	case FETCH_TEAM_FAILED: {
		return {
			...state,
			errors: action.payload,
		};
	}
	case FETCH_TEAM_COMPLETE: {
		return {
			...state,
			team: action.payload,
		};
	}
	case SET_TEAM: {
		return {
			...state,
			id: action.payload,
		}
	}
	default:
		return state;
	}
};
