import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import StreamListItem from '../streamListItem';

describe('StreamListItem', () => {
  
  it('renders properly', () => {
    const component = shallow(<StreamListItem stream={mockStream(false,false)}/>);
    expect(component.exists()).to.eq(true);
  });

  it('will toggle img.racing-icon depending if user is in race', () => {
    const componentRacing = shallow(<StreamListItem stream={mockStream(true,false)}/>);
    const componentNotRacing = shallow(<StreamListItem stream={mockStream(false,false)}/>);
    expect(componentRacing.find('img.racing-icon').length).to.eq(1);
    expect(componentNotRacing.find('img.racing-icon').length).to.eq(0);
  });

  it('will toggle .stream-list-item-selected class depending if user is a featured stream', () =>{
    const componentFeatured = shallow(<StreamListItem stream={mockStream(false,true)}/>);
    const componentNotFeatured = shallow(<StreamListItem stream={mockStream(false,false)}/>);
    expect(componentFeatured.find('.stream-list-item-selected').length).to.eq(1);
    expect(componentNotFeatured.find('.stream-list-item-selected').length).to.eq(0);
  });

});


const mockStream = (isRacing, isFeatured) => {
  return {
    "display_name": "cheese05",
    "meta_game": "Super Mario 64",
    "title": "120 star runs for 1:38. !meundies | !subtember",
    "image": {
      "size70": "https://static-cdn.jtvnw.net/jtv_user_pictures/cheese05-profile_image-ac5d2089ae89057e-70x70.png"
    },
    "is_racing": isRacing ? 1 : 0,
    "api": "hitbox",
    "current_viewers": 420,
    "user_name": "cheese05",
    "name": "cheese05",
    "featured": isFeatured
  }
}