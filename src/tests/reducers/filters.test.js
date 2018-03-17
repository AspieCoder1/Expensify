import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('should initialise store', () => {
	const state = filtersReducers(undefined, { type: '@@INIT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to amount', () => {
	const state = filtersReducers(undefined, { type: 'SORT_BY_AMOUNT' });
	expect(state).toEqual({
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set sortBy to date', () => {
	const currentState = {
		text: '',
		sortBy: 'amount',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	};
	const state = filtersReducers(currentState, { type: 'SORT_BY_DATE' });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});

test('should set startDate filter', () => {
	const now = moment().valueOf();
	const state = filtersReducers(undefined, { type: 'SET_START_DATE', startDate: now });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: now,
		endDate: moment().endOf('month')
	});
});

test('should set endDate filter', () => {
	const now = moment().valueOf();
	const state = filtersReducers(undefined, { type: 'SET_END_DATE', endDate: now });
	expect(state).toEqual({
		text: '',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: now
	});
});

test('should set text filter', () => {
	const state = filtersReducers(undefined, { type: 'SET_TEXT_FILTER', text: 'James' });
	expect(state).toEqual({
		text: 'James',
		sortBy: 'date',
		startDate: moment().startOf('month'),
		endDate: moment().endOf('month')
	});
});