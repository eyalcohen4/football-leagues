import React from 'react';

import Fixture from './Fixture';

const Fixtures = (props) => {
	return (
		<div>
			{ 
				props.fixtures && 
				props.fixtures.map((fixture, index) => <Fixture key={index} fixture={fixture} />) 
			}
		</div>
	);
};

export default Fixtures;