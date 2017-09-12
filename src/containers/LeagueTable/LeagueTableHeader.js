import React from 'react';

const LeagueTableHeader = (props) => {
	return (
		<thead>
			<tr>
				{ props.headers.names && props.headers.names.map((header, index) => {
					if (props.headers.mobile.indexOf(index) > -1) {
						return <th key={index}> { header } </th>
					} else {
						return (
							<th key={index} className="league-table__head__row league-table__head__row--desktop-only"> 
								{ header } 
							</th>
						)
					}
				})}
			</tr>
		</thead>
	);
};

export default LeagueTableHeader;