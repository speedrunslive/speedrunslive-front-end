import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRaces from './';

describe('LiveRaces Route Handler', () =>{
  it('renders', () => {
    const component = shallow(<LiveRaces />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<LiveRaces><div className='child'>a</div></LiveRaces>);
    expect(component.find('div.child').length).to.eq(1);
  });
});