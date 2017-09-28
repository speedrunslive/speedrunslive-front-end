import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRaceEntrants from './';
import LiveRaceTimer from '../../containers/liveRaceTimer';


describe('LiveRaceEntrants', () =>{
  it('renders', () => {
    let race = new MockRace(2,'In Progress','The Goal');
    const component = shallow(<LiveRaceEntrants race={race} />);
    expect(component.exists()).to.eq(true);
  });

  it('only displays a twitch icon if twitch data is passed in', () => {
    let race = new MockRace(2,'In Progress','The Goal');
    let entrants = createMockEntrants(5, false); //5 entrants, 0 are streaming

    let component = shallow(<LiveRaceEntrants race={race} entrants={entrants} />);
    expect(component.find('.icon').length).to.eq(0);

    entrants = createMockEntrants(5, true); //5 entrants, 5 are streaming
    component = shallow(<LiveRaceEntrants race={race} entrants={entrants} />);
    expect(component.find('.icon').length).to.eq(5);
  });

  it('handleStreamListChange is called when .icon is clicked', () => {
    let race = new MockRace(2,'In Progress','The Goal');
    let entrants = createMockEntrants(2, true);

    let mockClick = {counter: 0};
    let handleStreamListChange = function() {this.counter++;}
    handleStreamListChange = handleStreamListChange.bind(mockClick);

    const component = shallow(<LiveRaceEntrants race={race} entrants={entrants} handleStreamListChange={handleStreamListChange} />);
    let firstIcon = component.find('.icon').first();

    firstIcon.simulate('click');
    firstIcon.simulate('click');
    expect(mockClick.counter).to.eq(2);
  });

  it('race state != 3 then display race.statetext, no timer', () => {
    for(var state = 0; state < 10;state++) {
      if (state === 3) continue;
      let race = new MockRace(state,'THIS IS RACE STATE','The Goal');
      let component = shallow(<LiveRaceEntrants race={race} />);
      expect(component.text()).to.contain('THIS IS RACE STATE');
      expect(component.find(LiveRaceTimer).length).to.eq(0);
    }
  })

  it('race state === 3 then display <LiveRaceTimer />', () => {
    let race = new MockRace(3,'THIS IS RACE STATE','The Goal');
    let component = shallow(<LiveRaceEntrants race={race} />);
    expect(component.text()).not.to.contain('THIS IS RACE STATE');
    expect(component.find(LiveRaceTimer).length).to.eq(1);
  });
});

function MockRace (state, statetext, goal) {
  this.id = 1234;
  this.statetext = statetext;
  this.state = state;
  this.time = 1234;
  this.goal = goal;
  this.game = {
    name: 'Super Mario World',
    abbrev: 'smw'
  }
}

function MockEntrant(player, isStreaming) {
  this.twitch = (isStreaming) ? player : null;
  this.place = 1;
  this.time = 120;
  this.displayname=player;
  this.trueskill=1234;
}

const createMockEntrants = (count, isStreaming) => {
  let mockEntrantsObj = {};
  for (var i = 0;i < count;i++) {
    mockEntrantsObj[i] = new MockEntrant('dram55', isStreaming);
  }
  return mockEntrantsObj;
}