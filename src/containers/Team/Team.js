import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCurrentTeam, fetchTeamAction } from 'redux/modules/teams';

class Team extends Component {
	constructor(props) {
		super(props);
		const team = this.props.id || this.props.match.params.id;
		this.props.fetchTeamAction(this.props.id);
	}

	render() {
		return (
			<div>
				Leagues
			</div>
		);
	}
}

const mapStateToProps = state => ({
	id: state.teams.id
});

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTeamAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Team);
