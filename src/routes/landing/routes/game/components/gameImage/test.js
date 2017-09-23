import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameImage from './';

describe('GameImage', () =>{
  it('renders', () => {
    const component = shallow(<GameImage />);
    expect(component).to.exist;
  });
});