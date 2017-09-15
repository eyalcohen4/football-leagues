import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

import  { setCurrentTeam } from 'redux/modules/teams';

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
						const clubId = parseInt(clubHref.substring(clubHref.lastIndexOf('/') + 1, clubHref.length));

						const handleClick = () => { 
							this.props.goToTeam(clubId);							
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
	goToTeam: (id) => push(`/team/${id}`)
}, dispatch)

export default connect(null, mapDispatchToProps)(LeagueTableBody);