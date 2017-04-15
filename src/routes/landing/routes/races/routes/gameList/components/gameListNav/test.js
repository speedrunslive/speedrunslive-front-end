import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import GameList from './';

describe('GameList', () => {

  it('renders children correctly', () => {
    const wrapper = shallow(
        <GameList>
          <div className="child" />
        </GameList>
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});