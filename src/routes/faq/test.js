import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FAQ from './';

describe('FAQ', () => {

  it('renders children correctly', () => {
    const wrapper = shallow(
        <FAQ>
          <div className="child" />
        </FAQ>
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});