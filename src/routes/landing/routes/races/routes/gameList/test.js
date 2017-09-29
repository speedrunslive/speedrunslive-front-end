import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameList from './';

describe('GameList Route Handler', () =>{
  it('renders', () => {
    const component = shallow(<GameList />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<GameList><div className='child'>a</div></GameList>);
    expect(component.find('div.child').length).to.eq(1);
  });
});