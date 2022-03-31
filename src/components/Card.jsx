import React from 'react';
import CardHeader from './CardHeader.jsx';
import CardBody from './CardBody.jsx';
import CardFooter from './CardFooter.jsx';

function Card() {
	return (
		<article className="main__card">
			<CardHeader />
			<CardBody />
			<CardFooter />
		</article>
	);
}

export default Card;
