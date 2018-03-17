import Header from '../../components/Header.jsx';
import { shallow } from 'enzyme';
// import toJSON from 'enzyme-to-json';
import React from 'react';

test('should render header component', () => {
	const wrapper = shallow(<Header />);
	expect(wrapper).toMatchSnapshot();
	// expect(wrapper.find('h1').text()).toBe('Expensify');
});