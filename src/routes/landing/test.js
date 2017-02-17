import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Landing from './';

describe('Landing', () => {

  it('renders children correctly', () => {
    const wrapper = shallow(
        <Landing>
          <div className="child" />
        </Landing>
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});
