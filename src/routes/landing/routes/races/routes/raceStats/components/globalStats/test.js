import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GlobalStats from './';

describe('GlobalStats', () =>{
  let component;
  beforeEach(() => {
    component = shallow(<GlobalStats globalStats={mockGlobalStats} />);
  });
  it('renders', () => {
    expect(component.exists()).to.eq(true);
  });

  it('will display totalGames prop passed in', ()=> {
    expect(component.text()).to.contain(mockGlobalStats.totalGames);
  });

  it('will display totalPlayers prop passed in', ()=> {
    expect(component.text()).to.contain(mockGlobalStats.totalPlayers);
  });

  it('will display totalRaces prop passed in', ()=> {
    expect(component.text()).to.contain(mockGlobalStats.totalRaces);
  });

  it('prop globalStats.totalTimePlayed not displayed as seconds', () => {
    expect(component.text()).not.to.contain(mockGlobalStats.totalTimePlayed);
  })
});

const mockGlobalStats = {
  totalTimePlayed: 12345678,
  totalGames: 1234,
  totalPlayers: 9876,
  totalRaces:987654
}