import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Navigation from './';

describe('Navigation', () =>{
  it('renders', () => {
    const component = shallow(<Navigation />);
    expect(component.exists()).to.eq(true);
  });
});