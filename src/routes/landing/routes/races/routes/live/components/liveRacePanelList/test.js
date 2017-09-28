import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRacePanelList from './';

describe('LiveRacePanelList', () =>{
  it('renders', () => {
    const component = shallow(<LiveRacePanelList races={[]}/>);
    expect(component.exists()).to.eq(true);
  });
});