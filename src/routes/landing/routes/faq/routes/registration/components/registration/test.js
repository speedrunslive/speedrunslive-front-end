import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Registration from './';

describe('Registration', () =>{
  it('renders', () => {
    const component = shallow(<Registration />);
    expect(component).to.exist;
  });
});