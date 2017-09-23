import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import GameLeaderboardTable from './';

describe('GameLeaderboardTable', () =>{
  it('renders', () => {
    const component = shallow(<GameLeaderboardTable leaders={mockPlayerList(10)} percentile={1} />);
    expect(component).to.exist;
  });

  it('renders correct amount of rows', () => {
    const numberOfPlayers = 50;
    const component = shallow(<GameLeaderboardTable leaders={mockPlayerList(numberOfPlayers)} percentile={1} />);
    expect(component.find('tr').length).to.eq(numberOfPlayers);
  });

  it('renders correct percentile class', () => {
    testForPercentile('2');
    testForPercentile('4');
    testForPercentile('7');
    testForPercentile('unranked');
  });
});

const testForPercentile = (percentile) => {
  let component = shallow(<GameLeaderboardTable leaders={mockPlayerList(5)} percentile={percentile} />);
  expect(component.find(`.percentile-${percentile}`).length).to.eq(1);
}

const mockPlayerList = (count) => {
  let playerList = [];
  for(let i = 0; i < count; i++) {
    playerList.push(mockPlayer());
  }
  return playerList;
}

const mockPlayer = () => {
  return {
    rank: (Math.trunc(Math.random() * 100)),
    name: Math.random().toString(36).slice(2),
    trueskill: (Math.trunc(Math.random() * 2000))
  }
}