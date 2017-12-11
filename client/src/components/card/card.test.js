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

  it('gets "card_joined" class if card has joined prop true', () => {
    const wrapper = mount(<Card joined={true} />);
    expect(wrapper.render().hasClass('card_joined')).toBe(true);
  });

  it('does not add hide modifier to join-button when joined prop is true', () => {
    const wrapper = mount(<Card joined={false} />);
    expect(wrapper.find('.join-button').hasClass('button_hidden')).toBe(false);
  });

  it('adds hide modifier to join-button when joined prop is true', () => {
    const wrapper = mount(<Card joined={true} />);
    expect(wrapper.find('.join-button').hasClass('button_hidden')).toBe(true);
  });

  it('adds hide modifier to leave-button when joined state is false', () => {
    const wrapper = mount(<Card joined={false} />);
    expect(wrapper.find('.leave-button').hasClass('button_hidden')).toBe(true);
  });

  it('does not add hide modifier to leave-button when joined state is false', () => {
    const wrapper = mount(<Card joined={true} />);
    expect(wrapper.find('.leave-button').hasClass('button_hidden')).toBe(false);
  });
});
