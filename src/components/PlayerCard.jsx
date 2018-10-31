import React from 'react';

const PlayerCard = ({color, symbol}) => {
	const style = {
		backgroundColor: color,
		backgroundImage: `url(/img/${symbol}.png)`
	}
	console.log(style)

	return (
		<div style={style} className="player-card"></div>
	)
}

export default PlayerCard;
