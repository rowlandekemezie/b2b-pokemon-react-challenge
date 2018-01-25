import React from 'react';
import Router from 'react-router-dom/Router';
import createHistory from 'history/createBrowserHistory';

import Pokemons from '../index';

test('renders component', () => {
  const component = shallow(<Pokemons />);
  expect(component).toMatchSnapshot()
});

// test('render subcomponents', () => {
//   const history = createHistory();
//   const props = {
//     handleSelect: jest.fn()
//   }
//   const component = mount(<Router history={history}><Pokemons {...props} /></Router>);

//   expect(component).toMatchSnapshot();
// });
