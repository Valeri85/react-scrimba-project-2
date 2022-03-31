import React from 'react';
import Twitter from '../images/icons/twitter.svg';
import Facebook from '../images/icons/facebook.svg';
import Instagram from '../images/icons/instagram.svg';
import GitHub from '../images/icons/github.svg';

function CardFooter() {
	return (
		<div className="main__card-footer">
			<a className="main__card-link" href="#">
				<img className="icon" src={Twitter} alt="" aria-hidden="true" />
			</a>
			<a className="main__card-link" href="#">
				<img className="icon" src={Facebook} alt="" aria-hidden="true" />
			</a>
			<a className="main__card-link" href="#">
				<img className="icon" src={Instagram} alt="" aria-hidden="true" />
			</a>
			<a className="main__card-link" href="#">
				<img className="icon" src={GitHub} alt="" aria-hidden="true" />
			</a>
		</div>
	);
}

export default CardFooter;
