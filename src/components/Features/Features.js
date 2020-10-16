import React from 'react';
import './features.css';
import RellaxWrapper from 'react-rellax-wrapper'

const image = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship'
};

const Features = (props) => (
	<section className="features">
		<h2 className="features-title">
			{props.rocket} <br />Overview
		</h2>
		<div className="overview">
			<table className="table">
				<caption className="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td className="table-column">HEIGHT</td>
						<td className="table-column">{props.rocketFeatures.height.meters} m/ {props.rocketFeatures.height.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">DIAMETER</td>
						<td className="table-column">{props.rocketFeatures.diameter.meters} m / {props.rocketFeatures.diameter.feet} ft</td>
					</tr>
					<tr>
						<td className="table-column">MASS</td>
						<td className="table-column">{props.rocketFeatures.mass.kg} kg / {props.rocketFeatures.mass.lb} lb</td>
					</tr>
					{props.rocketFeatures.payload_weights.map((item) => (
						<tr key={item.id}>
							<td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
							<td className="table-column">{item.kg} kg / {item.lb} lb</td>
						</tr>
					))}
				</thead>
			</table>
			<RellaxWrapper speed={14}>
				<img src={`img/${image.hasOwnProperty(props.rocket) ?
					image[props.rocket] :
					image.other}.png`} alt="rocket" className="rocket" />
			</RellaxWrapper>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{props.rocketFeatures.description}
				</p>
			</article>
		</div>
	</section>
);

export default Features;