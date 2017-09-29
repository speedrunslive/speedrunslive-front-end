import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Channel from './';

describe('Channel', () =>{
  it('renders', () => {
    const component = shallow(<Channel />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<Channel><div className='child'>a</div></Channel>);
    expect(component.find('div.child').length).to.eq(1);
  });
});