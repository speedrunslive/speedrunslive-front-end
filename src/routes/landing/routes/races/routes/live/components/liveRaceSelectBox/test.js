import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import LiveRaceSelectBox from './';

describe('LiveRaceSelectBox', () =>{
  let component;
  let event;
  beforeEach(() => {
    let options = ['First','Second'];
    let defaultOption = 'DEFAULT';
    event = {counter: 0};
    function handleSelectBoxChange() {this.counter++;}
    component = shallow(<LiveRaceSelectBox options={options} defaultOption={defaultOption} handleSelectBoxChange={handleSelectBoxChange.bind(event)}/>);
  });
  
  it('renders', () => {
    expect(component.exists()).to.eq(true);
  });

  it('renders default option first', () => {
    expect(component.find('option').first().text()).to.eq('DEFAULT');
  });

  it('will call handleSelectBoxChange each time a value is changed', () => {
    component.simulate('change',{target:{value:'First'}});
    component.simulate('change',{target:{value:'Second'}});
    expect(event.counter).to.eq(2);
  });
});