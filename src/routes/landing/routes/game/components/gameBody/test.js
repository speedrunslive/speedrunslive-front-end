import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameBody from './';

describe('GameBody', () =>{
  it('renders', () => {
    const component = shallow(<GameBody params={{}}/>);
    expect(component).to.exist;
  });
});