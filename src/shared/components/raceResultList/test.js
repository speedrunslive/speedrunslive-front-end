import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import RaceResultList from './';

import Pagenator from '../pagenator';

describe('RaceResultList', () =>{
  it('renders', () => {
    const component = shallow(<RaceResultList raceResultList={[]} />);
    expect(component.exists()).to.eq(true);
  });

  it('renders single race properly', () => {
    const component = shallow(<RaceResultList raceResultList={[]} isIndividualRace={true} />);
    expect(component.text()).to.contain("Individual Race");
    expect(component.find(Pagenator).length).to.eq(0);
  });

  it('renders multiple races properly', () => {
    const component = shallow(<RaceResultList raceResultList={[]} isIndividualRace={false} />);
    expect(component.text()).to.contain("Latest Races");
    expect(component.find(Pagenator).length).to.eq(2);
  });
});