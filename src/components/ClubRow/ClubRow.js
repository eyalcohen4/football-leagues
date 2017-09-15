import React from 'react';
import { Link } from 'react-router-dom';

const ClubRow = (props) => {
	return (
		<tr key={props.club.position} className="league-table__body__row" onClick={props.onClick}>
			<td className="club-row">
				{ props.club.position} { props.club.teamName }
			</td>
			<td className="club-row"> { props.club.playedGames } </td>
			<td className="club-row club-row--desktop-only"> 
				{ props.club.goals } 
			</td>
			<td className="club-row club-row--desktop-only"> 
				{ props.club.goalsAgainst } 
			</td>
			<td className="club-row club-row--desktop-only"> 
				{ props.club.goalDifference} 
			</td>
			<td className="club-row club-row--desktop-only"> 
				{ props.club.wins } 
			</td>
			<td className="club-row club-row--desktop-only"> 
				{ props.club.draws } 
			</td>
			<td className="club-row club-row--desktop-only"> 
				{ props.club.losses } 
			</td>
			<td className="club-row"> { props.club.points } </td>
		</tr>
	);
};

export default ClubRow;
