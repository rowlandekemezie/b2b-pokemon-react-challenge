import React from 'react';
import Header from '../index';

test('render component', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});

test('render a img tag', () => {
  const component = shallow(<Header />);
  expect(component.find('img').length).toBe(1);
});
