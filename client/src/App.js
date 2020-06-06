import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './config/routes';

function App() {
	return (
		<Router>
			<Switch>{routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)}</Switch>
		</Router>
	);
}

function RouteWithSubRoutes(route) {
	console.log(route);
	return true;
}

export default App;
