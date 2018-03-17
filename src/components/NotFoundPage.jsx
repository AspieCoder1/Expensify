import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		<h1>Error 404: File Not Found</h1>
		<button><Link to="/">Go Home</Link></button>
	</div>
);

export default NotFoundPage;