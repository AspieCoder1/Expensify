import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { SingleDatePicker } from 'react-dates';
import ExpenseForm from '../../components/ExpenseForm.jsx';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm from expenses', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
	expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error').length).toBeGreaterThan(0);
	expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
	const description = 'Bill';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(0).simulate('change', {target:{ value: description }});
	expect(wrapper.state('description')).toBe(description);
});

// should set note on text area change
test('should set note on text area change', () => {
	const note = 'Hello world';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {target: { value: note }});
	expect(wrapper.state('note')).toBe(note);
});

test('should set amount if input is valid', () => {
	const amount = '23.50';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {target: { value: amount }});
	expect(wrapper.state('amount')).toBe(amount);
});

test('should set amount if input is valid', () => {
	const amount = '12.112';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {target: { value: amount }});
	expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit for valid form submission', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
	wrapper.find('form').simulate('submit', { preventDefault: () => {} });
	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	});
});

test('should set new date on date change', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find(SingleDatePicker).prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set focused on focus change', () => {
	const focused= true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find(SingleDatePicker).prop('onFocusChange')({ focused });
	expect(wrapper.state('calendarFocused')).toBeTruthy();
});