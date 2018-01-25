import React from 'react';
import Pokemons from '../index';

test('renders component', () => {
  const component = shallow(<Pokemons />);
  expect(component).toMatchSnapshot();
});
