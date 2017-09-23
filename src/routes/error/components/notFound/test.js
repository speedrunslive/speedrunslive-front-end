import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import NotFound from './';

describe('NotFound', () =>{
  it('renders', () => {
    const component = shallow(<NotFound />);
    expect(component.exists()).to.eq(true);
  });
});