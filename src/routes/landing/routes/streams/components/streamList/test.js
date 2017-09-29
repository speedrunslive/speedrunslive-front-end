import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import StreamList from './';

import StreamListItem from '../streamListItem';

describe('StreamList', () =>{
  it('renders', () => {
    const component = shallow(<StreamList streams={[1,2,3]}/>);
    expect(component.exists()).to.eq(true);
  });

  it('renders correct number of streams passed in', () => {
    const component = shallow(<StreamList streams={[1,2,3]}/>);
    expect(component.find(StreamListItem).length).to.eq(3);
  });
});