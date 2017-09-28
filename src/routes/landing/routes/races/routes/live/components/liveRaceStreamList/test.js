import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRaceStreamList from './';

describe('LiveRaceStreamList', () =>{
  let component;
  let selectedStreams;
  let event;
  beforeEach(() => {
    selectedStreams = ['dram55','chattester'];
    event = {counter: 0};
    function removeFromSelectedStreamList() {this.counter++;}
    component = shallow(<LiveRaceStreamList selectedStreams={selectedStreams} 
                                            removeFromSelectedStreamList={removeFromSelectedStreamList.bind(event)} />);
  })
  it('renders', () => {
    expect(component.exists()).to.eq(true);
  });
  it('renders the correct class AND number of streams', () => {
    selectedStreams = [];
    for(var i = 1; i < 30; i++) {
      selectedStreams.push(i + '');
      component = shallow(<LiveRaceStreamList selectedStreams={selectedStreams} />);
      let className = '.liquid-' + selectedStreams.length;
      expect(component.find(className).length).to.eq(selectedStreams.length);
    }
  });
  it('calls removeFromSelectedStreamList when clicked', () => {
    component.find('.close-btn').first().simulate('click');
    expect(event.counter).to.eq(1);
  });
});

