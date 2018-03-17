import React from 'react';
import ExpenseListItem from './ExpenseListItem.jsx';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
	<div>
		{props.expenses.length !== 0 ? props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense} />)) : <p>No expenses. please add an expense</p>}
	</div>
);

const mapStateToProps = (state) => ({ expenses: selectExpenses(state.expenses, state.filters) });

export default connect(mapStateToProps)(ExpenseList);
