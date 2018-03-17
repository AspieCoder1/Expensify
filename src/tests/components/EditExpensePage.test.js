import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage.jsx';
import expenses from '../fixtures/expenses';

let editExpense, history, wrapper, removeExpense;

beforeEach(() => {
	history = { push: jest.fn() };
	editExpense = jest.fn();
	removeExpense = jest.fn();
	wrapper = shallow(<EditExpensePage expense={expenses[0]} removeExpense={removeExpense} editExpense={editExpense} history={history} />);
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
	expect(removeExpense).toHaveBeenLastCalledWith({ id:expenses[0].id });
	expect(history.push).toHaveBeenLastCalledWith('/');
});