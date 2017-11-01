import React from 'react';
import { mount, shallow } from 'enzyme';
import Page from './Page';

describe('Page', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.length).toBeGreaterThan(0);
  });
});
