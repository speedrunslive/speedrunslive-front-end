import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Promotion from '../promotion';

describe('Promotion Route Handler', () =>{
  it('renders', () => {
    const component = shallow(<Promotion />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children when passed', () => {
    const component = shallow(<Promotion><div className='child'>a</div></Promotion>);
    expect(component.find('div.child').length).to.eq(1);
  })
});