import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRaceTwitchChats from './';

describe('LiveRaceTwitchChats', () =>{
  it('renders', () => {
    const component = shallow(<LiveRaceTwitchChats streams={mockStreams} selectedChat={mockSelectedStream} />);
    expect(component.exists()).to.eq(true);
  });

  it('selectedChat iframe will have .display class', () => {
    const component = shallow(<LiveRaceTwitchChats streams={mockStreams} selectedChat={mockSelectedStream} />);
    const selectedPlayer = component.find('iframe').findWhere(node => playerInSrcAttribute(node, 'chattester'));
    console.log(selectedPlayer.html());
    expect(selectedPlayer.length).to.eq(1);
    expect(selectedPlayer.find('.display').length).to.eq(1);
  });
  it('non selectedChat iframe will have .hidden class', () => {
    const component = shallow(<LiveRaceTwitchChats streams={mockStreams} selectedChat={mockSelectedStream} />);
    const otherPlayer = component.find('iframe').findWhere(node => playerInSrcAttribute(node, 'dram55'));
    expect(otherPlayer.length).to.eq(1);
    expect(otherPlayer.find('.hidden').length).to.eq(1);
  });
});

function playerInSrcAttribute(node, player) {
  return node.prop('src').indexOf(player) > 0;
}

const mockStreams = ['dram55','chattester'];
const mockSelectedStream = 'chattester';