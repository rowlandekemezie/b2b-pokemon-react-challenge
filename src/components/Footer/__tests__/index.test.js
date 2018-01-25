import React from 'react';
import Footer from '../index';

test('render component', () => {
  const component = shallow(<Footer />);
  expect(component).toMatchSnapshot();
});

test('render a link tag', () => {
  const component = shallow(<Footer />);
  expect(component.find('a').length).toBe(1);
});
