import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Footer from './';

describe('Footer', () =>{
  it('renders', () => {
    const component = shallow(<Footer />);
    expect(component.exists()).to.eq(true);
  });
});