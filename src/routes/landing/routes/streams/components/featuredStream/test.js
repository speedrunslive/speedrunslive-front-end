import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import FeaturedStream from './';

describe('FeaturedStream', () =>{
  let component;
  beforeEach(() => {
    component = shallow(<FeaturedStream featuredStream={mockStream} />);
  });
  it('renders', () => {
    expect(component.exists()).to.eq(true);
  });
  it('will display game prop passed', () => {
    expect(component.text()).to.contain(mockStream.meta_game);
  });
  it('will display name prop passed', () => {
    expect(component.text()).to.contain(mockStream.display_name);
  });
});

const mockStream = {
  title:'A Stream Title!! I pl4Y viDEO GaME$!!!!',
  current_viewers: 420,
  display_name: 'ChatTester',
  name: 'TheChatTester',
  meta_game: 'Hentai',
  is_racing:true
}
