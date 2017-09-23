import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import ToolsBody from '../toolsBody';

describe('ToolsBody', () =>{
  it('renders', () => {
    const component = shallow(<ToolsBody />);
    expect(component.exists()).to.eq(true);
  });
});