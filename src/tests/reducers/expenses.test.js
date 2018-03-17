import moment from 'moment';
import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set up default state', () => {
	const state = expenseReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual([]);
});

test('should add an expense', () => {
	const expense = {
		description: 'rent',
		amount: 1000,
		createdAt: moment().valueOf(),
		note: ''
	};
	const state = expenseReducer(undefined, {type: 'ADD_EXPENSE', expense: {...expense}});
	expect(state).toEqual([{...expense}]);
});

test('should edit expense', () => {
	const edits = {
		amount: 3.50
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '1',
		updates: edits
	};
	const state = expenseReducer(expenses, action);
	expect(state[0].amount).toBe(3.50);
});

test('should not edit expense if id is invalid', () => {
	const edits = {
		amount: 3.50
	};
	const action = {
		type: 'EDIT_EXPENSE',
		id: '-1',
		updates: edits
	};
	const state = expenseReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: expenses[1].id
	};
	const state = expenseReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id is invalid', () => {
	const action = {
		type: 'REMOVE_EXPENSE',
		id: '-1'
	};
	const state = expenseReducer(expenses, action);
	expect(state).toEqual(expenses);
});