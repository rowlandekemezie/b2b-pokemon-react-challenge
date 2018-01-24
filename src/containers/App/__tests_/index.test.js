import React from 'react';
import App from '../index';

let component;
beforeAll(() => {
  component = shallow(<App />);
});

test('renders without crashing', () => {
  expect(component).toMatchSnapshot();
});

test('should contain Footer component', () => {
  const component = shallow(<App />);
  expect(component.find('Footer').length).toBe(1);
});

test('should contain Header component', () => {
  const component = shallow(<App />);
  expect(component.find('Header').length).toBe(1);
});
