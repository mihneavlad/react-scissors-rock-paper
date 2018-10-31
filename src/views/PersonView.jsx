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

	render() {
		return (
			<Fragment>
				{symbols.map((symbol, index) =>
					<Row key={index}>
						<Col sm="3">
							<Link to={`/gameview/${symbol}`}>
							<PlayerCard
								color="blue"
								symbol={symbol}
							/>
							</Link>
						</Col>
					</Row>
				)}
			</Fragment>
		);
	}
}

export default PersonView;
