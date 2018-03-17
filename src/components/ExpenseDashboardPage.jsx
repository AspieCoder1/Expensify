import React from 'react';
import Header from './Header.jsx';
import ConnectedExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from './ExpenseListFilters.jsx';

const ExpenseDashboardPage = () => (
	<div>
		<Header />
		<ExpenseListFilters />
		<ConnectedExpenseList />
	</div>
);

export default ExpenseDashboardPage; 