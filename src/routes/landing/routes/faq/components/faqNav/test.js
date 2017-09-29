import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import FAQNav from './';

describe('FAQNav', () =>{
  it('renders', () => {
    const component = shallow(<FAQNav />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<FAQNav><div className='child'>a</div></FAQNav>);
    expect(component.find('div.child').length).to.eq(1);
  });
});