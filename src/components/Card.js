import React from "react";
import pin from "../img/pin.png";

export default function Card(props) {
	return (
		<div className="card">
			<img
				src={props.item.imageUrl}
				alt={props.item.title}
				className="card--image"
			></img>
			<div className="card--text--body">
				<div className="card--locator">
					<img src={pin}></img>
					<p className="card--location">{props.item.location}</p>
					<a className="card--google" href={props.item.googleMapsUrl}>
						View on Google Maps
					</a>
				</div>
				<h1 className="card--title">{props.item.title}</h1>
				<h2 className="card--dates">
					{props.item.startDate} - {props.item.endDate}
				</h2>
				<p className="card--description">{props.item.description}</p>
			</div>
		</div>
	);
}
