import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Map from './Map';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('renders without crashing', () => {
  const wrapper = shallow(<Map location="Fortaleza - CE" />);
  expect(wrapper.exists()).toBe(true);
});

test("doesn't break without location", () => {
  const wrapper = shallow(<Map location />);
  expect(wrapper.exists()).toBe(true);
});
