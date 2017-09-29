import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import IndividualRaceResult from './';

describe('IndividualRaceResult', () =>{
  it('renders', () => {
    const component = shallow(<IndividualRaceResult params={{}} />);
    expect(component.exists()).to.eq(true);
  });
});