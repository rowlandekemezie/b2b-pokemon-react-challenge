import React from 'react';
import PokemonList from '../PokemonList';

test('render component', () => {
  const props = {
    pokemons: [{
      name: 'test',
      url: 'test/2'
    }]
  };

  const component = shallow(<PokemonList {...props} />);
  expect(component).toMatchSnapshot();
  expect(component.find('Link')).toBeDefined();
  expect(component.props().className).toEqual('pokemon__list');
});
