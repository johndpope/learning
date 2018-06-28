import React from 'react';

const PortfolioItemPage = (props) => (
	<div>
		<h1>One Item</h1>
		<p>This is my PortfolioItemPage for id {props.match.params.id}</p>
	</div>
);

export default PortfolioItemPage;