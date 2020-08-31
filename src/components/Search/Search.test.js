import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Search from './Search';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/brennolemos',
  }),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

test('renders without crashing', () => {
  const wrapper = shallow(<Search />);
  expect(wrapper.exists()).toBe(true);
});

test('text is echoed', () => {
  const wrapper = shallow(<Search />);

  wrapper.find('input').simulate('change', {
    target: { value: 'brennolemos' },
  });
  expect(wrapper.find('input').props().value).toEqual('brennolemos');
});

test('when the form is submitted, the event is cancelled is echoed', () => {
  const wrapper = shallow(<Search />);
  let prevented = false;

  wrapper.find('form').simulate('submit', {
    preventDefault: () => {
      prevented = true;
    },
  });
  expect(prevented).toBe(true);
});
