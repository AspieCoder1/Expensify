import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{numeral(amount).format('$0,0.00')} - {moment(createdAt).format('Do MMM, YYYY')}</p>
		<button onClick={()=>{ dispatch(removeExpense({ id })); }}>Remove</button>
		<Link to={`edit/${id}`}>Edit</Link>
	</div>
);

export default connect()(ExpenseListItem);
