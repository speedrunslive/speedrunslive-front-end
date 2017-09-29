import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import StreamSearchBox from './';

describe('StreamSearchBox', () =>{
  it('renders', () => {
    const component = shallow(<StreamSearchBox />);
    expect(component.exists()).to.eq(true);
  });

  it('calls onChange each time the textbox is changed', () => {
    let event = {counter: 0};
    function onChange() {this.counter++;}
    const component = shallow(<StreamSearchBox onChange={onChange.bind(event)} />);
    component.find('input').simulate('change', {currentTarget: {value:'search1'}});
    component.find('input').simulate('change', {currentTarget: {value:'searchTerm 2'}});
    expect(event.counter).to.eq(2);
  });
});