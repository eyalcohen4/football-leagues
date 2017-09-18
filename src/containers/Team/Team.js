import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCurrentTeam, fetchTeamAction } from 'redux/modules/teams';

import Fixtures from 'components/Fixtures/Fixtures';

class Team extends Component {
	constructor(props) {
		super(props);

		const team = this.props.id || this.props.match.params.id;
		this.props.fetchTeamAction(team);
	}

	render() {
		const team = this.props.team;
		const fixtures = team && team.fixtures && team.fixtures.fixtures;
		
		return (
			<div>
				{ team && team.name}
				<Fixtures fixtures={fixtures} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	id: state.teams.id,
	team: state.teams.team,
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTeamAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
