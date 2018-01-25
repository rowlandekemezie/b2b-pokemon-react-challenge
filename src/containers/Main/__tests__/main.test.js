import React from 'react';
import Router from 'react-router-dom/Router';
import createHistory from 'history/createBrowserHistory';
import Main from '../index';

test('renders component', () => {
  const component = shallow(<Main />);

  expect(component).toMatchSnapshot();
});

test('renders subcomponents', () => {
  const component = shallow(<Main />);
  
  expect(component.find('Pokemons').length).toBeDefined();
  expect(component.find('PokemonDetails').length).toBeDefined(); 
  expect(component.find('DetailModal').length).toBeDefined();     
});

test('renders with history props', () => {
  const history = createHistory();
  const component = <Router history={history}><Main /></Router>;

  expect(component).toMatchSnapshot();
  expect(component.props.history).toBeDefined()
});



