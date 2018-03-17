import { createStore } from 'redux';

// Action Generators - returns action objects
const incrementCount = ({ incrementBy = 1 } = {} ) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = () => ({
	type: 'RESET'
});

const setCount = ({ count = 1} = {}) => ({
	type: 'SET',
	count
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action
// 3. 

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
	default:
		return state;
	case 'INCREMENT':
		return {
			count: state.count + action.incrementBy
		};
	case 'DECREMENT':
		return {
			count: state.count - action.decrementBy	
		};
	case 'RESET':
		return {
			count: 0
		};
	case 'SET':
		return {
			count: action.count
		};
	}
};

const store = createStore(countReducer);

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));
