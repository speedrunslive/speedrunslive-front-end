import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Rules from './';

describe('Rules', () =>{
  it('renders', () => {
    const component = shallow(<Rules />);
    expect(component).to.exist;
  });
});