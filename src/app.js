import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'numeral/locales/en-gb.js';
import numeral from 'numeral';
import { firebase } from './firebase/firebase';

numeral.locale('en-gb');

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(jsx, document.getElementById('app'));
});

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
		});
		if (history.location.pathname === '/') {
			history.push('/dashboard');
		}
	} else {
		store.dispatch(logout());
		history.push('/');
		renderApp();
	}
});
