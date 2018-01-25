import React from 'react';
import PokemonItem from '../PokemonItem';

test('render component', () => {
  const props = {
    pokemon: {
      name: 'test',
      url: 'test/2'
    }
  };

  const component = shallow(<PokemonItem {...props} />);
  expect(component).toMatchSnapshot();
});
