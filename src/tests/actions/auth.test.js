import { login, logout } from '../../actions/auth';

test('should login', () => {
	const res = login('Hello');
	expect(res).toEqual({
		type: 'LOGIN',
		uid: 'Hello'
	});
});

test('should logout', () => {
	const res = logout();
	expect(res).toEqual({
		type: 'LOGOUT'
	});
});