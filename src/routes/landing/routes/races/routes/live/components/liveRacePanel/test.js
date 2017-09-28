import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRacePanel from './';
import LiveRaceTimer from '../../containers/liveRaceTimer';

describe('LiveRacePanel', () =>{
  let component;
  let race;
  beforeEach(() => {
    race = new MockRace(3,'THIS IS RACE STATE');
    component = shallow(<LiveRacePanel race={race} />);
  })


  it('renders', () => {
    let race = new MockRace(1,'THIS IS RACE STATE');
    let component = shallow(<LiveRacePanel race={race} />);
    expect(component.exists()).to.eq(true);
  });

  it('race state !=0= 3 then display race.statetext, no timer', () => {
    for(var state = 0; state < 10;state++) {
      if (state === 3) continue;
      race = new MockRace(state,'THIS IS RACE STATE');
      component = shallow(<LiveRacePanel race={race} />);
      expect(component.html()).to.contain('THIS IS RACE STATE');
      expect(component.find(LiveRaceTimer).length).to.eq(0);
    }
  })

  it('race state === 3 then display <LiveRaceTimer />', () => {
    expect(component.html()).not.to.contain('THIS IS RACE STATE');
    expect(component.find(LiveRaceTimer).length).to.eq(1);
  });

  it('race.game.name prop passed in, is displayed', () => {
    expect(component.find('.race-details > h2').text()).to.eq('Super Mario World');
  });

  it('race.goal prop passed in, is displayed', () => {
    expect(component.find('.race-details > div').text()).to.eq('A Race Goal');
  })
});
function MockRace (state, statetext) {
  this.id = 1234;
  this.statetext = statetext;
  this.state = state;
  this.time = 1234;
  this.goal = 'A Race Goal';
  this.game = {
    name: 'Super Mario World',
    abbrev: 'smw'
  }
}