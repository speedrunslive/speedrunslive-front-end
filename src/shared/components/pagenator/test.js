import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Pagenator from './';

describe('Pagenator', () =>{
  let firstPageComponent;
  let middlePageComponent;
  let lastPageComponent;
  beforeEach(() => {
    firstPageComponent = shallow(<Pagenator page={1} lastPage={5}/>);
    lastPageComponent = shallow(<Pagenator page={5} lastPage={5}/>);
    middlePageComponent = shallow(<Pagenator page={5} lastPage={10}/>);
  });

  it('renders', () => {
    expect(middlePageComponent).to.exist;
  });

  it('renders 4 .btn total', () => {
    
    expect(firstPageComponent.find('.btn').length).to.eq(4);
    expect(middlePageComponent.find('.btn').length).to.eq(4);
    expect(lastPageComponent.find('.btn').length).to.eq(4);
  });

  it('buttons render correct if on first page', () => {
    expect(firstPageComponent.find('button[disabled] > span.first').length).to.eq(1);
    expect(firstPageComponent.find('button[disabled] > span.previous').length).to.eq(1);
    expect(firstPageComponent.find('button[disabled] > span.next').length).to.eq(0);
    expect(firstPageComponent.find('button[disabled] > span.last').length).to.eq(0);
  });

  it('buttons render correctly if on last page', () => {
    expect(lastPageComponent.find('button[disabled] > span.first').length).to.eq(0);
    expect(lastPageComponent.find('button[disabled] > span.previous').length).to.eq(0);
    expect(lastPageComponent.find('button[disabled] > span.next').length).to.eq(1);
    expect(lastPageComponent.find('button[disabled] > span.last').length).to.eq(1);
  }); 

});