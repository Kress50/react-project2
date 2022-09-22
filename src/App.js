import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data/data";

export default function App() {
	const cards = data.map((card) => {
		return <Card key={card.id} item={card} />;
	});

	return (
		<div className="container">
			<Header />
			<div className="card--scroll">{cards}</div>
		</div>
	);
}
