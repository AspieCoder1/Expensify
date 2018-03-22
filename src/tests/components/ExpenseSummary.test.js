import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import findTotal from '../../selectors/expenses-total';
import { ExpenseSummary } from '../../components/ExpenseSummary.jsx';

test('should render correctly with no expenses', () => {
	const res = shallow(<ExpenseSummary />);
	expect(res).toMatchSnapshot();
});

test('should render correctly with expenses', () => {
	const res = shallow(<ExpenseSummary expenseCount={expenses.length} expenseTotal={findTotal(expenses)} />);
	expect(res).toMatchSnapshot();
});