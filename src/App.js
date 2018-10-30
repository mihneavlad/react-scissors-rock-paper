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

	
	render() {
		return (
			<div className="App">
				<PlayerCard
					color="red"
					symbol="paper"
				/>
				<PlayerCard
					color="blue"
					symbol="paper"
				/>
			</div>
		);
	}
}

export default App;
