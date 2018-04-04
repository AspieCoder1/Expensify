import authReducer from '../../reducers/auth';

test('should handle login correctly', () => {
	const action = {
		type: 'LOGIN',
		uid: 'Hello'
	};
	const state = authReducer({}, action);
	expect(state.uid).toBe(action.uid);
});

test('should handle logout correctly', () => {
	const action = {
		type: 'LOGOUT'
	};
	const state = authReducer({}, action);
	expect(state).toEqual({});
});