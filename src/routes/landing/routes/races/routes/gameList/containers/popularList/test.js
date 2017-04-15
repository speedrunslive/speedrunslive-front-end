import React from 'react';
import { Provider } from 'react-redux';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PopularListContainer from './';
import { games, storeFake } from './mocks'

describe('PopularListContainer', () => {
  it('renders props correctly', () => {
    const store = storeFake({});

    const wrapper = shallow(
        <Provider store={store}>
            <PopularListContainer games={games} />
        </Provider>
    );

    expect(wrapper.prop('games').length).to.eq(2);
    expect(wrapper.prop('games')[0].name).to.eq('ATest');
    expect(wrapper.prop('games')[0].short).to.eq('atest');
  });
});