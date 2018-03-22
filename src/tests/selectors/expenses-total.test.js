import findTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
	const result = findTotal([]);
	expect(result).toBe(0);
});

test('should add up a single expense', () => {
	const result = findTotal([expenses[0]]);
	expect(result).toBe(1.95);
});

test('should add up a single expense', () => {
	const result = findTotal(expenses);
	expect(result).toBe(1141.95);
});