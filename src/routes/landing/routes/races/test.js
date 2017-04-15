import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Races from './';

describe('Races', () => {

  it('renders children correctly', () => {
    const wrapper = shallow(
        <Races>
          <div className="child" />
        </Races>
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});