import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { fetchLeaguesAction } from 'redux/modules/leagues';

import logo from './logo.svg';

import Home from 'containers/Home/Home';
import LeagueTable from 'containers/LeagueTable/LeagueTable';
import Team from 'containers/Team/Team';

class App extends Component {
	constructor(props) {
		super(props);
		this.props.fetchLeaguesAction()
	}
	
	render() {
		return (
			<div>
				<header>
					<Link to="/">All Leagues</Link>
				</header>

				<main>
					<Route exact path="/" component={Home}/>
					<Route exact path="/table/:id" component={LeagueTable} />
					<Route exact path="/team/:id" component={Team} />
				</main>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	fetchLeaguesAction,
}, dispatch);
const app = connect(null, mapDispatchToProps)(App);
export default withRouter(app);