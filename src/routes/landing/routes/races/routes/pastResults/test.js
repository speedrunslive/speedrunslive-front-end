import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PastResults from './';

describe('PastResults', () =>{
  it('renders', () => {
    const component = shallow(<PastResults params={{}} />);
    expect(component.exists()).to.eq(true);
  });

});