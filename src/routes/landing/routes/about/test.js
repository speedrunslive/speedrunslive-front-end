import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import About from './';

describe('About', () =>{
  it('renders', () => {
    const component = shallow(<About />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<About><div className='child'>a</div></About>);
    expect(component.find('div.child').length).to.eq(1);
  });
});