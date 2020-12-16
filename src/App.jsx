import React from 'react';
import IMDBNavbar from './components/nav/IMDBNavbar';
import { ROUTES } from './routes';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';

class App extends React.Component {
	getRoutes(routes) {
		return routes.map(
			(prop, key) =>
				prop.path === '/' ? (
					<Route exact path={prop.path} key={key}>
						{prop.component}
					</Route>
				) : (
					<Route path={prop.path} key={key}>
						{prop.component}
					</Route>
				)
		);
	}

	render() {
		return (
			<Router basename="/">
				<IMDBNavbar />
				<Switch>{this.getRoutes(ROUTES)}</Switch>
			</Router>
		);
	}
}

export default App;
