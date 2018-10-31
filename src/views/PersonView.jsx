import React, { Component } from 'react';
import '../css/main.css';

const PlayerCard = ({color, symbol}) => {

	const style = {
		backgroundColor: color,
		backgroundImage: "url(./img/" + symbol + ".png)"
	}

	return (
		<div style={style} className="player-card"></div>
	)
}

class PersonView extends Component {

	constructor(props) {
		super(props)
		this.symbols = ["scissors", "rock", "paper"];
		this.state = {};
	}


	render() {
		return (
						<div className="game-container d-flex my-auto">
            		<PlayerCard
									color="red"
									symbol={this.symbols[0]}
								/>
								<PlayerCard
									color="red"
									symbol={this.symbols[1]}
								/>
								<PlayerCard
									color="red"
									symbol={this.symbols[2]}
								/>
						</div>

		);
	}
}

export default PersonView;
