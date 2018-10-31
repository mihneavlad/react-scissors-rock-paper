import React from 'react';

const PlayerCard = ({color, symbol, className}) => {
	const style = {
		backgroundColor: color,
		backgroundImage: `url(/img/${symbol}.png)`
	}
	console.log(style)

	return (
		<div style={style} className={`player-card ${className}`}></div>
	)
}

export default PlayerCard;
