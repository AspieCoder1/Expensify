import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';

export const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
	<div>
		<h3>{description}</h3>
		<p>{amount} - {moment(createdAt).format('Do MMM YYYY')}</p>
		<button onClick={()=>{ dispatch(removeExpense({ id })); }}>Remove</button>
		<Link to={`edit/${id}`}>Edit</Link>
	</div>
);

export default connect()(ExpenseListItem);
