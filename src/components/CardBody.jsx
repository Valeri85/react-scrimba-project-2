import React from 'react';

function CardBody() {
	return (
		<div className="main__card-body">
			<h2 className="main__card-title">About</h2>
			<blockquote className="main__card-text">
				I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to
				keep up with security and best practices, and am always looking for new things to learn.
			</blockquote>
			<h2 className="main__card-title">Interests</h2>
			<p className="main__card-text">
				Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja.
				Coffee fanatic.
			</p>
		</div>
	);
}
export default CardBody;
