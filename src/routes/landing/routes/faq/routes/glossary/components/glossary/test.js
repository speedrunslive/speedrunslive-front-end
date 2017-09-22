import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Glossary from './';

describe('Glossary', () =>{
  it('renders', () => {
    const component = shallow(<Glossary />);
    expect(component).to.exist;
  });
});