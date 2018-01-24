import React from 'react';
import Pagination from '../index';

const props = {
  current: 0,
  total: 5,
  onPrev: jest.fn(),
  onNext: jest.fn()
};

test('renders component properly', () => {
  const component = shallow(<Pagination {...props} />);
  expect(component).toMatchSnapshot();
});

test('should not render if there are no pages', () => {
  const newProps = { ...props, total: 0 };
  const component = shallow(<Pagination {...newProps} />);

  expect(component.find('.pagination').length).toBe(0);
});

test('should not render next button if current is greater than or requal total', () => {
  const newProps = { ...props, current: 5 };
  const component = shallow(<Pagination {...newProps} />);

  expect(component.find('.pagination__next').length).toBe(0);
});

test('should not render prev button if currentPage is less than one', () => {
  const newProps = { ...props, current: 0 };
  const component = shallow(<Pagination {...newProps} />);

  expect(component.find('.pagination__prev').length).toBe(0);
});
