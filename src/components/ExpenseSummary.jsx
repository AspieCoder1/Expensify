import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import '../config/numeralConfig';

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
	const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
	return (
		<div>
			<h1>Viewing {expenseCount} {expenseWord} totalling {numeral(expenseTotal).format('$0,00.00')}</h1>
		</div>
	);
};

const mapStateToProps = (state) => ({
	expenseCount: selectExpenses(state.expenses, state.filters).length,
	expenseTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
});


export default connect(mapStateToProps)(ExpenseSummary);
