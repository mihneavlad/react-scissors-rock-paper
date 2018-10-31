import React, { Component, Fragment } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";
import { Col, Row} from 'reactstrap';


const PlayerCard = ({color, symbol}) => {

	const style = {
		backgroundColor: color,
		backgroundImage: "url(./img/" + symbol + ".png)"
	}

	return (
		<div style={style} className="player-card"></div>
	)
}

const symbols = ["scissors", "rock", "paper"];


class PersonView extends Component {

	constructor(props) {
		super(props)
		this.symbols = ["scissors", "rock", "paper"];
		this.state = {};
	}

	render() {
		return (
			<Fragment>
				{symbols.map((symbol, index) =>
					<Row>
						<Col key={index} sm="3">
							<PlayerCard
								color="blue"
								symbol={symbol}
							/>
						</Col>
					</Row>
				)}
			</Fragment>
		);
	}
}

export default PersonView;
