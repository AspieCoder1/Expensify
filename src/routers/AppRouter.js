import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import AddExpensePage from '../components/AddExpensePage.jsx';
import EditExpensePage from '../components/EditExpensePage.jsx';
import HelpPage from '../components/HelpPage.jsx';
import NotFoundPage from '../components/NotFoundPage.jsx';

const AppRouter = () => (
	<BrowserRouter>
		<Switch>
			<Route exact={true} path="/" component={ExpenseDashboardPage} />
			<Route exact={true} path="/create" component={AddExpensePage} />
			<Route exact={true} path="/edit/:id" component={EditExpensePage} />
			<Route exact={true} path="/help" component={HelpPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>
);

export default AppRouter;