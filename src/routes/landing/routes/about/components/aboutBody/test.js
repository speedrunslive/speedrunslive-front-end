import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import AboutBody from './';

describe('AboutBody', () =>{
  it('renders', () => {
    const component = shallow(<AboutBody />);
    expect(component).to.exist;
  });
});