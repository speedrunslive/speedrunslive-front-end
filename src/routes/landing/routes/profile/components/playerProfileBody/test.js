import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PlayerProfileBody from './';

describe('PlayerProfileBody', () =>{
  it('renders', () => {
    const component = shallow(<PlayerProfileBody params={mockParams}/>);
    expect(component.exists()).to.eq(true);
  });
});

const mockParams = {

}