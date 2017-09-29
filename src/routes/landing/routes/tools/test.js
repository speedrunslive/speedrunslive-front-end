import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Tools from '../tools';

describe('Tools Route Handler', () =>{
  it('renders', () => {
    const component = shallow(<Tools />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<Tools><div className='child'>a</div></Tools>);
    expect(component.find('div.child').length).to.eq(1);
  });
});