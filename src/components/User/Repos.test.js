import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Repos from './Repos';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<Repos username="brennolemos" />);
  expect(wrapper.exists()).toBe(true);
});

test("doesn't break without username", () => {
  const wrapper = shallow(<Repos />);
  expect(wrapper.exists()).toBe(true);
});
