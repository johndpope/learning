import React from 'react';
import { Route, BrowserRouter, Switch, Link, NavLink } from 'react-router-dom';
import EntryPage from '../components/EntryPage';
import GamePage from '../components/GamePage';
import NotFoundPage from '../components/NotFoundPage';
import '../App.css';
import logo from '../logo.svg';

const Header = () => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">Odds</h1>
	</header>
);

const AppRouter = () => (
	<BrowserRouter>
		<div className="App">
			<Header />
			<Switch>
				<Route path ="/" component={EntryPage} exact={true} />
				<Route path = "/:id(\d+)" component={GamePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;