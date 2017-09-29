import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Game from './';

describe('Game', () =>{
  it('renders', () => {
    const component = shallow(<Game />);
    expect(component.exists()).to.eq(true);
  });

  it('renders children', () => {
    const component = shallow(<Game><div className='child'>a</div></Game>);
    expect(component.find('div.child').length).to.eq(1);
  });
});