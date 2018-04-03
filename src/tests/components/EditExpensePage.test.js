import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage.jsx';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, startRemoveExpense;

beforeEach(() => {
	history = { push: jest.fn() };
	editExpense = jest.fn();
	startRemoveExpense = jest.fn();
	wrapper = shallow(<EditExpensePage expense={expenses[0]} startRemoveExpense={startRemoveExpense} editExpense={editExpense} history={history} />);
});

test('should render EditExpensePage correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should handle on submit', () => {
	wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
	expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
	expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense', () => {
	wrapper.find('button').simulate('click');
	expect(startRemoveExpense).toHaveBeenLastCalledWith({ id:expenses[0].id });
	expect(history.push).toHaveBeenLastCalledWith('/');
});