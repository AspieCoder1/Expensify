import { setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment from 'moment';

test('should generate a set start date action object', () => {
	const result = setStartDate(moment(0));
	expect(result).toEqual({
		type: 'SET_START_DATE',
		startDate: moment(0)
	});
});

test('should generate a set end date action object', () => {
	const result = setEndDate(moment(0));
	expect(result).toEqual({
		type: 'SET_END_DATE',
		endDate: moment(0)
	});
});

test('should generate a sort by date action object', () => {
	const result = sortByDate();
	expect(result).toEqual({
		type: 'SORT_BY_DATE',
	});
});

test('should generate a sort by amount action object', () => {
	const result = sortByAmount();
	expect(result).toEqual({
		type: 'SORT_BY_AMOUNT',
	});
});

test('should set text filter', () => {
	const result = setTextFilter('James');
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text: 'James'
	});
});

test('it should set default text filter if none is passed in', () => {
	const result = setTextFilter();
	expect(result).toEqual({
		type: 'SET_TEXT_FILTER',
		text: ''
	});
});