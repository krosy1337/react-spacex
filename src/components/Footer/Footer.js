import React from 'react';
import './footer.css';

import logo from '../../logo.svg';
const Footer = (props) => {
	return (
		<footer className="footer" >
			<img src={logo} alt="logo Space X" className="logo" />
			<nav className="footer-nav">
				<ul className="list">
					<li className="item">
						<a href={props.links.elon_twitter}
							rel="noopener noreferrer"
							target='_blank'
							className="item-link"
						>Elon MuskTwitter
						</a>
					</li>
					<li className="item">
						<a href={props.links.twitter}
							rel="noopener noreferrer"
							target='_blank'
							className="item-link"
						>Twitter
							  </a>
					</li>
					<li className="item">
						<a href={props.links.flickr}
							rel="noopener noreferrer"
							target='_blank'
							className="item-link"
						>Flickr
						   </a>
					</li>
					<li className="item">
						<a href={props.links.website}
							rel="noopener noreferrer"
							target='_blank'
							className="item-link"
						>Website
						   </a>
					</li>
				</ul>
			</nav>
			<p className="footer-text">
				For additional questions, contact
			<a className="footer-link" href="mailto:rideshare@spacex.com">rideshare@spacex.com</a>
			</p>
		</footer >
	)
};

export default Footer;