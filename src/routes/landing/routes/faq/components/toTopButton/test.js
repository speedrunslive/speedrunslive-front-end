import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ToTopButton from './';

describe('ToTopButton', () =>{
  it('renders', () => {
    const component = shallow(<ToTopButton />);
    expect(component.exists()).to.eq(true);
  });

  it('click attempts to manipulate window object', () => {
    const window = {};
    const component = shallow(<ToTopButton />);
    expect(() => {component.simulate('click')}).to.throw('window is not defined');
  });
});