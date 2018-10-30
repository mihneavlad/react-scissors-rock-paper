import React, { Component } from 'react';
import './css/main.css';

// stateless component

const PlayerCard = ({color, symbol}) => {

	const style = {
		backgroundColor: color
	}

	return (
		<div style={style} className="player-card">
			{symbol}
		</div>
	)
}

class App extends Component {

	constructor(props) {
		super(props)
		this.symbols = ["scissors", "rock", "paper"];
		this.state = {};
	}

	playGame = () => {
		const symbol = Math.floor(Math.random() * 3);
		console.log(this.symbols[symbol]);
		this.setState({
			player1: this.symbols[Math.floor(Math.random() * 3)],
			player2: this.symbols[Math.floor(Math.random() * 3)]
		})
	}

	render() {
		return (
			<div className="App">
				<PlayerCard
					color="red"
					symbol={this.state.player1}
				/>
				<PlayerCard
					color="blue"
					symbol={this.state.player2}
				/>
				<button onClick={this.playGame}>Play Game</button>
			</div>
		);
	}
}

export default App;
