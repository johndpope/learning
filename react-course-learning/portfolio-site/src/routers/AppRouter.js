import React from 'react';
import { Route, BrowserRouter, Switch, Link, NavLink } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import ContactPage from '../components/ContactPage';
import DashboardPage from '../components/DashboardPage';


const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={DashboardPage} exact={true} />
				<Route path="/portfolio" component={PortfolioPage} exact={true}/>
				<Route path="/portfolio/:id" component={PortfolioItemPage} />
				<Route path="/contact" component={ContactPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;