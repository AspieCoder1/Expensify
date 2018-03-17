// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hjacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>INFO</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarnings = (WrappedComponent) => {
	return (props) => (
		<div>
			<p> This is Private info please dont share</p>
			<WrappedComponent {...props}/>
		</div>
	);
};

const AdminInfo = withAdminWarnings(Info);

ReactDOM.render(<AdminInfo info="HOC are cool" />, document.getElementById('app'));