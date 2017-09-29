import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PlayerStats from './';

describe('PlayerStats', () =>{
  it('renders', () => {
    const component = shallow(<PlayerStats playerStats={mockplayerStats}/>);
    expect(component.exists()).to.eq(true);
  });

  it('renders game name', () => {
    const component = shallow(<PlayerStats playerStats={mockplayerStats}/>);
    expect(component.text()).to.contain(mockplayerStats.game.name);
  })

});

const mockplayerStats = {
  game: {name:'My Test Game'},
  stats: {}
}