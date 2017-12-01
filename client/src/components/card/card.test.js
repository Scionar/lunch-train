import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from './card';

describe('Card', () => {
  it('smoketest', () => {
    const wrapper = shallow(<Card />);
  });

  it('has "card" class', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.render().hasClass('card')).toBe(true);
  });

  it('gets "card_opened" class after toggleOpening()', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.render().hasClass('card_opened')).toBe(false);
    wrapper.instance().toggleOpening();
    expect(wrapper.render().hasClass('card_opened')).toBe(true);
  });

  it('chages joined state from false to true when clicking join-button', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.state('joined')).toBe(false);
    wrapper.find('.join-button').simulate('click');
    expect(wrapper.state('joined')).toBe(true);
  });

  it('adds hide modifier to join-button when joined state is true', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.state('joined')).toBe(false);
    expect(wrapper.find('.join-button').hasClass('button_hidden')).toBe(false);
    wrapper.find('.join-button').simulate('click');
    expect(wrapper.find('.join-button').hasClass('button_hidden')).toBe(true);
  });

  it('changes joined state from true to false when clicking leave-button', () => {
    const wrapper = mount(<Card />);
    wrapper.find('.join-button').simulate('click');
    wrapper.find('.leave-button').simulate('click');
    expect(wrapper.state('joined')).toBe(false);
  });

  it('adds hide modifier to leave-button when joined state is false', () => {
    const wrapper = mount(<Card />);
    expect(wrapper.find('.leave-button').hasClass('button_hidden')).toBe(true);
    wrapper.find('.join-button').simulate('click');
    expect(wrapper.find('.leave-button').hasClass('button_hidden')).toBe(false);
  });
});
