import React, { Component, Fragment } from 'react';
import '../css/main.css';
import {Link} from "react-router-dom";
import { Col, Row} from 'reactstrap';

import PlayerCard from '../components/PlayerCard';

const symbols = ["scissors", "rock", "paper"];


class PersonView extends Component {
	render() {
		return (
			<Fragment>
				<div className="game-container">
					<div className="d-flex">
						{symbols.map((symbol, index) =>
							<Row className="m-auto three-buttons" key={index}>
								<Col>
									<Link to={`/gameview/${symbol}`}>
									<PlayerCard
										color="blue"
										symbol={symbol}
									/>
									</Link>
								</Col>
							</Row>
						)}
					</div>
					<h4 className="text-center">You are the blue player! Choose your shape!</h4>
				</div>
			</Fragment>
		);
	}
}

export default PersonView;
