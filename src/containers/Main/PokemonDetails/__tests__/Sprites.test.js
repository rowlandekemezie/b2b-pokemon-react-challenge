import React from 'react';
import Sprites from '../Sprites';

test('renders nothing', () => {
  const props = {
    sprites: {}
  };
  const component = shallow(<Sprites {...props} />);

  expect(component).toMatchSnapshot();
  expect(component.find('.sprites__wrapper').length).toBe(0);
});

test('renders sprites component', () => {
  const props = {
    sprites: {
      1: 'https://fakeurl.com/image.png'
    }
  };
  const component = shallow(<Sprites {...props} />);
  expect(component).toMatchSnapshot();
  expect(component.find('.sprites__wrapper').length).toBe(1);
});
