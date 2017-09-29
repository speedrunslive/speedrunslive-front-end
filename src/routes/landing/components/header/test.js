import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Header from './';

describe('Header', () =>{
  it('renders', () => {
    const component = shallow(<Header />);
    expect(component.exists()).to.eq(true);
  });
});