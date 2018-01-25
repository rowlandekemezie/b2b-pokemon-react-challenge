import React from 'react';
import BasicDetails from '../BasicDetails';

let props;
beforeAll(() => {
  props = {
    backToHome: jest.fn(),
    details: {
      name: '',
      types: [{type: 'test'}],
      abilities: [{ability: 'test'}],
      forms: [{name: '', url: 'test/1'}]
    }
  };
});
test('render component', () => {
  const component = shallow(<BasicDetails {...props} />);
  expect(component).toMatchSnapshot();
});

test('handles returning back to homepage', () => {
  const component = mount(<BasicDetails {...props} />);
  component.find('img').first().simulate('click');
  expect(props.backToHome).toHaveBeenCalled();
});
