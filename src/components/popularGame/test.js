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

    expect(wrapper.children().prop('to')).to.eq('/races/game/test/1');
    expect(wrapper.find('.gameName').text()).to.eq('Test');
    expect(wrapper.find('.gameRank').text()).to.eq('1');
  });
});