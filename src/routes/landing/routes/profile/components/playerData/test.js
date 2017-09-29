import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import PlayerData from './';

describe('PlayerData', () =>{
  const emptyPlayerDataProps = {srl:{},external:{}};

  it('renders', () => {
    const component = shallow(<PlayerData playerData={emptyPlayerDataProps} />);
    expect(component.exists()).to.eq(true);
  });
});