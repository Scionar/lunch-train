import React from 'react';
import { shallow } from 'enzyme';
import Page from './page';

describe('Page', () => {
  it('always renders a div', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.length).toBeGreaterThan(0);
  });

  it('has "page" class', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper.hasClass('page')).toBe(true);
  });

  it('gets "page_white" classes when set with whiteColor prop', () => {
    const wrapper = shallow(<Page whiteColor />);
    const classList = wrapper.props().className.split(' ');
    expect(classList.length).toBe(2);
    expect(classList).toContain('page');
    expect(classList).toContain('page_white');
  });
});
