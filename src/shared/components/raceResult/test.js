import React from 'react';
import {shallow, render} from 'enzyme';
import {expect} from 'chai';
import RaceResult from '../raceResult';
import {FORFEIT, DISQUALIFIED} from '../../../utils/raceHelper'

describe('RaceResult', () => {
  let componentForfeit;
  beforeEach(() => {
    componentForfeit = render(<RaceResult raceResult={mockRaceResultForPlace(FORFEIT)} />);
  });
  it('contains .race-result-table class', () => {
    expect(componentForfeit.find('.race-result-table').length).to.eq(1);
  });

  it('forfeits renders correctly', () =>{ 
    expect(componentForfeit.text()).to.contain('Forfeit');
  });

  it('DQ renders correctly', () => {
    const componentDQ = shallow(<RaceResult raceResult={mockRaceResultForPlace(DISQUALIFIED)} />);
    expect(componentDQ.text()).to.contain('DQ');
    expect(componentDQ.find('.loser-place').length).to.eq(1);
  });

  it('first place renders correctly', () => {
    const componentFirst = shallow(<RaceResult raceResult={mockRaceResultForPlace(1)} />);
    expect(componentFirst.text()).to.contain('1st');
    expect(componentFirst.find('.first-place').length).to.eq(1);
  });

  it('second place renders correctly', () => {
    const componentSecond = shallow(<RaceResult raceResult={mockRaceResultForPlace(2)} />);
    expect(componentSecond.text()).to.contain('2nd');
    expect(componentSecond.find('.second-place').length).to.eq(1);
  });

  it('third place renders correctly', () => {
    const componentThird = shallow(<RaceResult raceResult={mockRaceResultForPlace(3)} />);
    expect(componentThird.text()).to.contain('3rd');
    expect(componentThird.find('.third-place').length).to.eq(1);
  });

  it('comments render properly',() => {
    expect(componentForfeit.text()).to.contain(genericComment);
  });

  it('player renders properly', () => {
    expect(componentForfeit.find('.player').text()).to.contain('Elminster');
  });
});

const genericComment = 'This is a generic comment!!!';
const mockRaceResultForPlace= (place) => {
  return {
    "id": "1234",
    "game": {
      "id": 2,
      "name": "The Legend of Zelda: Ocarina of Time",
      "abbrev": "oot",
      "popularity": 963,
      "popularityrank": 1
    },
    "goal": "http://www.speedrunslive.com/tools/oot-bingo/?seed=1447",
    "date": 1293999874,
    "numentrants": 1,
    "ranked_results": {},
    "results": [
      {
        "race": 1234,
        "place": place,
        "player": "Elminster",
        "time": 0,
        "message": genericComment,
        "oldtrueskill": 859,
        "newtrueskill": 845,
        "trueskillchange": -14,
        "oldseasontrueskill": 0,
        "newseasontrueskill": 0,
        "seasontrueskillchange": 0
      }
    ]
  }
}
