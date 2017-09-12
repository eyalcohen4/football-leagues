import React from 'react';

const LeagueTableBody = (props) => {
	return (
		<tbody>
			{ props.clubs && props.clubs.map((club) => {
				return (
					<tr key={club.position} className="league-table__body__row">
						<td className="league-table__body__row__col"> { club.position } { club.teamName } </td>
						<td className="league-table__body__row__col"> { club.playedGames } </td>
						<td className="league-table__body__row__col league-table__body__row__col--desktop-only"> 
							{ club.goals } 
						</td>
						<td className="league-table__body__row__col league-table__body__row__col--desktop-only"> 
							{ club.goalsAgainst } 
						</td>
						<td className="league-table__body__row__col league-table__body__row__col--desktop-only"> 
							{ club.goalDifference} 
						</td>
						<td className="league-table__body__row__col league-table__body__row__col--desktop-only"> 
							{ club.wins } 
						</td>
						<td className="league-table__body__row__col league-table__body__row__col--desktop-only"> 
							{ club.draws } 
						</td>
						<td className="league-table__body__row__col league-table__body__row__col--desktop-only"> 
							{ club.losses } 
						</td>
						<td className="league-table__body__row__col"> { club.points } </td>
					</tr>
				)
			})}
		</tbody>
	);
};

export default LeagueTableBody;