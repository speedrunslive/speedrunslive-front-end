import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameStats from './';

describe('GameStats', () =>{
  it('renders', () => {
    const component = shallow(<GameStats />);
    expect(component.exists()).to.eq(true);
  });

  it('will display correct stats', () => {
    const componentText = shallow(<GameStats game={game} stats={stats} />).text();
    expect(componentText).to.contain('Abbreviation: ' + game.abbrev);
    expect(componentText).to.contain('Races: ' + stats.totalRaces);
  });
});

const game = {id: 326, name: "The Magical Quest Starring Mickey Mouse", abbrev: "mmq", popularity: 36, popularityrank: 27};
const stats = {totalRaces: 92, totalPlayers: 79, largestRace: 7792, largestRaceSize: 7, totalRaceTime: 222144};