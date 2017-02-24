import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PopularList from './';
import games from './mocks'

describe('PopularList', () => {
  it('renders children and props correctly', () => {
    const wrapper = shallow(
        <PopularList games={games} />
    ).find('ul');

    expect(wrapper.children().length).to.eq(2);
    expect(wrapper.childAt(0).prop('name')).to.eq('ATest');
    expect(wrapper.childAt(0).prop('rank')).to.eq(1);
    expect(wrapper.childAt(0).prop('short')).to.eq('atest');
  });
});