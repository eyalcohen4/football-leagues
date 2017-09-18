import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import  { setCurrentTeam } from 'redux/modules/teams';

import football from 'lib/football/football';
import ClubRow from 'components/ClubRow/ClubRow';

class LeagueTableBody extends Component {
		constructor(props) {
			super(props);
		}
		
		render() {
			return (
				<tbody>
					{ this.props.clubs && this.props.clubs.map((club) => {
						const clubHref = club._links.team.href; 
						const clubId = football.getTeamIDFromURL(clubHref);

						const handleClick = () => { 
							this.props.goToTeam(this.props.league, clubId);							
							return this.props.setCurrentTeam(clubId) 
						};

						return (
							<ClubRow club={club} onClick={handleClick} key={clubId} />
						)
					})}
				</tbody>
			);
	}
}

const mapDispatchToProps = dispatch => bindActionCreators({
	setCurrentTeam,
	goToTeam: (table, club) => push(`/table/${table}/team/${club}`)
}, dispatch)

export default connect(null, mapDispatchToProps)(LeagueTableBody);