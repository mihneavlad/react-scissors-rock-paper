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
							<Route exact path="/gameview/:sign" component={GameView} />
							<Route exact path="/personview" component={PersonView} />
						</Switch>
					</main>
				</Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
