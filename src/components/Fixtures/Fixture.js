import React from 'react';
import moment from 'moment';

const Fixture = (props) => {
	const fixture = props.fixture;
	
	return (
		<div className="fixture">
			<header className="fixture__header">
				<span className="fixture__date"> { fixture.date } </span>
				<span className="fixture__hour"> </span>
			</header>
			<main>
				<span> { fixture.homeTeamName } </span>
				<span> { fixture.result.goalsHomeTeam } </span>
				-
				<span> { fixture.result.goalsAwayTeam } </span>
				<span> { fixture.awayTeamName } </span>
			</main>
		</div>
	);
};

export default Fixture;