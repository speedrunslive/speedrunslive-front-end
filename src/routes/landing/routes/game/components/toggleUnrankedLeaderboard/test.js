import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ToggleUnrankedLeaderboard from './';

describe('ToggleUnrankedLeaderboard', () =>{
  it('renders', () => {
    const component = shallow(<ToggleUnrankedLeaderboard />);
    expect(component.exists()).to.eq(true);
  });
});