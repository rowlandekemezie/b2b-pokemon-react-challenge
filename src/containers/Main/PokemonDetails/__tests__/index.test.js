import React from 'react';
import PokemonDetails from '../index';
import Router from 'react-router-dom/Router';
import createHistory from 'history/createBrowserHistory';

test('render component properly', () => {
  const component = shallow(<PokemonDetails />);

  expect(component).toMatchSnapshot();
});

test('render subcomponents', () => {
  const history = createHistory();
  const component = mount(<Router history={history}><PokemonDetails /></Router>);

  expect(component).toMatchSnapshot();
});
