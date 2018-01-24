import React from 'react';
import SearchInput from '../index';

test('should render component properly', () => {
  const component = shallow(<SearchInput />);
  expect(component).toMatchSnapshot();
});

test('should update the value of the input', () => {
  const onChangeMock = jest.fn();

  const component = mount(<SearchInput onChange={onChangeMock} value="test" />);
  expect(component.find('input').length).toBe(1);
  component.find('input').simulate('change');
  expect(onChangeMock).toHaveBeenCalled();
});
