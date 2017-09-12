import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTableAction } from 'redux/modules/tables';
import { setCurrentLeague } from 'redux/modules/leagues';

import LeagueTableHeader from './LeagueTableHeader';
import LeagueTableBody from './LeagueTableBody';

const headers = {
	names: ['Name', 'Games', 'GF', 'GA', 'GD', 'W', 'D', 'L', 'Points'],
	mobile: [0, 1, 8],
}
class LeagueTable extends Component {
	constructor(props) {
		super(props);
		this.props.setCurrentLeague(this.props.match.params.id);
		this.props.fetchTableAction();
		this.headers = headers;
	}

	render() {
		return (
			<div className="league-table"> 
					<header>
						<h1> 
							{ this.props.table && this.props.table.leagueCaption }
						</h1>
						<span> Fixture: { this.props.table && this.props.table.matchday } </span>
					</header>
					<table>
							<LeagueTableHeader headers={this.headers} />
							<LeagueTableBody clubs={this.props.table && this.props.table.standing} />
					</table>
			</div>
		);
	}
}

const mapStateToThis = state => ({
	table: state.tables.table,
})

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchTableAction,
	setCurrentLeague,
}, dispatch)

export default connect(mapStateToThis, mapDispatchToProps)(LeagueTable);