import React, { Component } from 'react';
import { connect } from 'react-redux';


import LeaguePreview from 'components/LeaguePreview/LeaguePreview';

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<ul className="league-preview-list">
				{ this.props.leagues && 
					this.props.leagues.map((league) => ( 
						<li className="league-preview-list__item" key={league.id}>
							<LeaguePreview league={league} />
						</li> 
					)	
					)}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	leagues: state.leagues.leagues,
});

export default connect(mapStateToProps, null)(Home);