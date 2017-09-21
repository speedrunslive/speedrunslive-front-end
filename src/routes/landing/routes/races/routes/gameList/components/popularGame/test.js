import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PopularGame from './';
import props from './mocks'

describe('PopularGame', () => {
  it('renders props correctly', () => {
    const wrapper = shallow(
      <PopularGame name={props.name} rank={props.rank} short={props.short} />
    );
    expect(wrapper.children().prop('to')).to.eq('/races/game/test');
    expect(wrapper.find('.game-name').text()).to.eq('Test');
    expect(wrapper.find('.first-place').length).to.eq(1);
  });
});