import React from 'react';
import './details.css';
import { Link } from 'react-router-dom';
import Main from '../Main/Main';


const Details = () => (
	<>
		<Main />
		<main className="details">
			<div className="container">
				<div className="details-row">
					<div className="details-image">
						<img src="https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png" alt="" />
					</div>
					<div className="details-content">
						<p className="details-description">Engine failure at 33 seconds and loss of vehicle</p>
					</div>
				</div>
				<div>
					<iframe className="details-youtube" width="560" height="315" src="https://www.youtube.com/embed/dLQ2tZEH6G0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
			</div>
			<Link to="/calendar" className="button button-back">go back</Link>
		</main>
	</>
);

export default Details;