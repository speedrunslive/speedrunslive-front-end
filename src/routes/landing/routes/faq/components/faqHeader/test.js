import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import FAQHeader from './';

describe('FAQHeader', () =>{
  it('renders', () => {
    const component = shallow(<FAQHeader />);
    expect(component).to.exist;
  });
});