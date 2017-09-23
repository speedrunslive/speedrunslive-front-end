import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PlayerGameList from './';

describe('PlayerGameList', () =>{
  it('renders', () => {
    const component = shallow(<PlayerGameList game={mockGame} playerGameList={mockGameList} player={mockPlayer} />);
    expect(component).to.exist;
  });

  it('will have .selected class for game if exists in gameList', () => {
    const component = shallow(<PlayerGameList game={mockGame} playerGameList={mockGameList} player={mockPlayer} />);
    expect(component.find('.selected').html()).to.contain(mockGameList[selectedIdx].gameName);
  });

  it('will display a row for each game + 1 for "Overall Stats"', () => {
    const component = shallow(<PlayerGameList game={mockGame} playerGameList={mockGameList} player={mockPlayer} />);
    expect(component.find('li').length).to.eq(mockGameList.length + 1);
  })

});

const mockPlayer = 'chattester';

const mockGameList = [
  {
    gameAbbrev:"test",
    gameName:"The 1 Game"
  },
  {
    gameAbbrev:"test2",
    gameName:"The SELECTED Game"
  },
  {
    gameAbbrev:"test3",
    gameName:"The 3 Game"
  },
];

const selectedIdx = 2;

const mockGame = mockGameList[selectedIdx].gameAbbrev;