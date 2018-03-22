import React from 'react';
import Header from './Header.jsx';
import ConnectedExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from './ExpenseListFilters.jsx';
import ExpenseSummary from './ExpenseSummary.jsx';

const ExpenseDashboardPage = () => (
	<div>
		<Header />
		<ExpenseSummary />
		<ExpenseListFilters />
		<ConnectedExpenseList />
	</div>
);

export default ExpenseDashboardPage; 