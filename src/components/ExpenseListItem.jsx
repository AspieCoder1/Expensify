import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'gb',  {
	delimiters: {
		thousands: ',',
		decimal: '.'
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't'
	},
	ordinal: function (number) {
		var b = number % 10;
		return (~~ (number % 100 / 10) === 1) ? 'th' :
			(b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
	},
	currency: {
		symbol: '£'
	}
});

numeral.locale('gb');

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{numeral(amount).format('$0,0.00a')} - {moment(createdAt).format('Do MMM, YYYY')}</p>
		<button onClick={()=>{ dispatch(removeExpense({ id })); }}>Remove</button>
		<Link to={`edit/${id}`}>Edit</Link>
	</div>
);

export default connect()(ExpenseListItem);
