import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import CommandList from './';

describe('CommandList', () =>{
  it('renders', () => {
    const component = shallow(<CommandList />);
    expect(component).to.exist;
  });
});