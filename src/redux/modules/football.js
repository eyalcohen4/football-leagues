import football from 'lib/football';

export const FETCH_TABLE_START = 'football/fetch_table_start';
export const FETCH_TABLE_COMPLETE = 'football/fetch_table_complete';
export const FETCH_TABLE_FAILED = 'football/fetch_table_failed';

const initialState = {
	currentLeague: null,
	team: null,
	table: null,
	leagues,
	erros: {},
};

const fetchLeagues = (dispatch, getState) => {
	football.getCompetitions().then(
		leagues => dispatch({ type: FETCH_LEAGUES_COMPLETE, payload: leagues }),
		error => dispatch({ type: FETCH_LEAGUES_FAILED, payload: error }),
	);
};

const fetchCurrentTable = (dispatch, getState) => {
	dispatch({ type: FETCH_TABLE_START });
	const league = getState().football.league;

	football.getCompetitionTable(league).then(
		table => dispatch({ type: FETCH_TABLE_COMPLETE, payload: table }),
		error => dispatch({ type: FETCH_TABLE_FAILED, payload: error }),
	);
};

export const fetchTableAction = () => fetchCurrentTable();
export const fetchLeaguesAction = () => fetchLeagues();

export default (state = initialState, action) => {
	switch (action.type) {
	case FETCH_TABLE_START: {
		return state;
	}
	case FETCH_TABLE_FAILED: {
		return {
			...state,
			errors: action.payload,
		};
	}
	case FETCH_TABLE_COMPLETE: {
		return {
			...state,
			table: action.payload,
		};
	}
	default:
		return state;
	}
};
