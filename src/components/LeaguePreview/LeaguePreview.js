import React from 'react';
import { Link } from 'react-router-dom';

const LeaguePreview = (props) => {
	return (
		<div className="league-preview">
			<div className="league-preview__title">
				<span className="league-preview__title__code"> { props.league.league } </span>
				<span> - </span> 
				Fixture: { props.league.currentMatchday } / { props.league.numberOfMatchdays }
			</div>
			<div className="league-preview__current-fixture">
				<p className="league-preview__title__caption"> { props.league.caption } </p>
			</div>
			<div className="league-preview__actions">
				<Link to={`table/${props.league.id}`}> Watch Table </Link>
			</div>
		</div>
	);
};

export default LeaguePreview;