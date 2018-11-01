import React, { Component } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";
import PlayerCard from '../components/PlayerCard';

class GameView extends Component {

	constructor(props) {
		super(props)
		this.symbols = ["scissors", "rock", "paper"];
		this.state = {};
	}

	// React Router sign from URL link
	componentDidMount() {
		this.setState({
			player1: this.props.match.params.sign
		})
	}

	// Game logic

	decideWinner = () => {
		const {player1, player2} = this.state;
		if (player1 === player2) {
			return "It's a draw!"
		}

		if(
			(player1 === "rock" && player2 ==="scissors") ||
			(player1 === "scissors" && player2 ==="paper") ||
			(player1 === "paper" && player2 ==="rock")
			) {
			return "You win!"
		}

		return "Computer wins!"

	}

	// Setting state 15 times for the shuffle effect

	playGame = () => {

		let counter = 0

		let shuffle = setInterval(() => {
			counter++
			this.setState({
				player2: this.symbols[Math.floor(Math.random() * 3)],
				winner: ""
			})

			if(counter > 15) {
				clearInterval(shuffle);
				this.setState({winner: this.decideWinner()})
			}
		}, 100)
	}

	render() {
		return (
						<div className="game-container d-flex my-auto">
							  <div className="game">
								<h4 className="text-center">{this.state.winner}</h4>
								<PlayerCard
									color="blue"
									symbol={this.state.player1}
								/>
								<PlayerCard
									color="red"
									className="computer"
									symbol={this.state.player2}
								/>
								<button onClick={this.playGame}>Check the Outcome!</button>
								<Link to="/personview" className="btn btn-light">
			            Choose a different shape!
			          </Link>
								<h4 className="text-center1">{this.state.winner}</h4>
              </div>
						</div>
		);
	}
}

export default GameView;
