import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import TrackedGoals from './';

describe('TrackedGoals', () =>{
  let component;
  beforeEach(() => {
    const goal = mockGoal(10);
    component = shallow(<TrackedGoals trackedGoals={goal} />);
  })
  it('renders', () => {
    expect(component).to.exist;
  });

  it('renders only 5 topresults even if there are more', () => {
    expect(component.find('tr').length).to.eq(6);
  });

  it('renders less than 5 topresults correctly', () => {
    const goal = mockGoal(3);
    component = shallow(<TrackedGoals trackedGoals={goal} />);
    expect(component.find('tr').length).to.eq(4);
  });

  it('renders goal name', () => {
    expect(component.text()).to.contain('This Is The Goal');
  });

});

const mockGoal = (count) => {
  let mockTopTimes = [];
  for (let i = 0; i < count; i++) {
    mockTopTimes.push(mockTopTime());
  }
  return [{
    name:'This Is The Goal',
    toptimes: mockTopTimes
  }];
}

const mockTopTime = () => {
  return {
    race: Math.trunc(Math.random() * 1000),
    place: Math.trunc((Math.random() * 10) + 1),
    player: Math.random().toString(36).slice(2),
    time: Math.trunc(Math.random() * 750),
  }
}
