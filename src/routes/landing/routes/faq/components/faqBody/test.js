import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import FAQBody from './';

describe('FAQBody', () =>{
  it('renders', () => {
    const component = shallow(<FAQBody />);
    expect(component).to.exist;
  });

});