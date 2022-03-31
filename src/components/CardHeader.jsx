import React from 'react';
import Image from '../images/laura.png';
import Email from '../images/icons/mail.svg';
import LinkedIn from '../images/icons/linkedin.svg';

function CardHeader() {
	return (
		<figure className="main__card-header">
			<img className="main__card-img" src={Image} alt="Laura Smith" />
			<figcaption className="main__card-figcaption">
				<h1 className="main__card-name">Laura Smith</h1>
				<h3 className="main__card-job">Frontend Developer</h3>
				<a className="main__card-website" href="#">
					laurasmith.website
				</a>
				<button className="button button--email">
					<img className="icon" src={Email} alt="" aria-hidden="true" />
					Email
				</button>
				<button className="button button--linkedin">
					<img className="icon" src={LinkedIn} alt="" aria-hidden="true" />
					LinkedIn
				</button>
			</figcaption>
		</figure>
	);
}

export default CardHeader;
