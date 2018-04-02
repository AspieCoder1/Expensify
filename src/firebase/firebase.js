import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyDcehz3fA3T1_4yhyhExI10p9_2-u_A9bQ',
	authDomain: 'expensify-8e2c8.firebaseapp.com',
	databaseURL: 'https://expensify-8e2c8.firebaseio.com',
	projectId: 'expensify-8e2c8',
	storageBucket: 'expensify-8e2c8.appspot.com',
	messagingSenderId: '966843972069'
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default};
