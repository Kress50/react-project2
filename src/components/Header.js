import React from "react";
import globe from "../img/globe.png";

export default function Header() {
	return (
		<header className="header">
			<img src={globe}></img>
			<p className="header--title">my travel journal.</p>
		</header>
	);
}
