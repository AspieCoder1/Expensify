import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { DateRangePicker } from 'react-dates';
import { ExpenseListFilters } from '../../components/ExpenseListFilters.jsx';
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, onFocusChange, wrapper;

beforeEach(() => {
	setTextFilter = jest.fn();
	sortByDate = jest.fn();
	sortByAmount = jest.fn();
	setStartDate = jest.fn();
	setEndDate = jest.fn();
	onFocusChange = jest.fn();
	wrapper = shallow(
		<ExpenseListFilters 
			filters={filters}
			setTextFilter={setTextFilter}
			sortByDate={sortByDate}
			sortByAmount={sortByAmount}
			setStartDate={setStartDate}
			setEndDate={setEndDate}
			onFocusChange={onFocusChange}
		/>);
});

test('should render ExpenseListFilters correctly', () => {
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with altFilters correctly', () => {
	wrapper.setProps({ filters: altFilters });
	expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
	wrapper.find('input').simulate('change', { target: {value: 'bill'} });
	expect(setTextFilter).toHaveBeenLastCalledWith('bill');
});

test('should sort by date', () => {
	wrapper.find('select').simulate('change', { target: {value: 'date'} });
	expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
	wrapper.find('select').simulate('change', { target: {value: 'amount'} });
	expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
	const startDate = moment().startOf('month');
	const endDate = moment().endOf('month'); 

	wrapper.find(DateRangePicker).prop('onDatesChange')({startDate: startDate, endDate: endDate});
	expect(setStartDate).toHaveBeenLastCalledWith(startDate);
	expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus changes', () => {
	const calendarFocused = 'endDate';
	wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
	expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});