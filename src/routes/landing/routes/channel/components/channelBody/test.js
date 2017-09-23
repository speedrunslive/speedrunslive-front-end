import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ChannelBody from './';

describe('ChannelBody', () =>{
  it('renders', () => {
    const component = shallow(<ChannelBody />);
    expect(component.exists()).to.eq(true);
  });
});