import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AlphaList from './';
import games from './mocks'

describe('AlphaList', () => {
  it('renders list items correctly', () => {
    const wrapper = shallow(
        <AlphaList games={games} />
    ).find('.alphaList ul li');

    expect(wrapper.length).to.eq(3);
    expect(wrapper.find('h1').text()).to.eq('A');
    expect(wrapper.at(1).text()).to.eq('ATest');
    expect(wrapper.at(2).text()).to.eq('ATest2');
  });
});
