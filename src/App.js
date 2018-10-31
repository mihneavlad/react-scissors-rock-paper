import React, {Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './css/main.css';

import Home from './views/Home';
import GameView from './views/GameView';


class App extends Component {

	render() {
		return (
			<BrowserRouter className="mainc">
				<Fragment>
					<main>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route exact path="/gameview" component={GameView} />
						</Switch>
					</main>
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
