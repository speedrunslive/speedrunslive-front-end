import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PromoBody from '../promoBody';

describe('PromoBody', () =>{
  it('renders', () => {
    const component = shallow(<PromoBody />);
    expect(component.exists()).to.eq(true);
  });
});
