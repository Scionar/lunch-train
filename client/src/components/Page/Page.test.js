import React from 'react';
import { shallow } from 'enzyme';
import Page from './page';

describe('Page', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.length).toBeGreaterThan(0);
  });
});
