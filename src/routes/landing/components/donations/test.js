import React from 'react';
import { expect } from 'chai';
import {shallow} from 'enzyme';
import Donations, {SERVER_COST} from '../donations';
import {numberToMonth} from '../../../../utils';

let lowDonations = {amount: SERVER_COST - 10};
let exactDonations = {amount:SERVER_COST};
let highDonations = {amount:SERVER_COST + 25};

describe('Donations', () => {
  let lowDonationComponent;
  let exactDonationComponent;
  let highDonationComponent;
  beforeEach(() => {
    lowDonationComponent = shallow(<Donations donations={lowDonations} />);
    exactDonationComponent = shallow(<Donations donations={exactDonations} />);
    highDonationComponent = shallow(<Donations donations={highDonations} />);
  });

  it('Renders a single .donations-total class', () =>{
    expect(lowDonationComponent.find(".donations-total").length).to.eq(1);
    expect(exactDonationComponent.find(".donations-total").length).to.equal(1);
    expect(highDonationComponent.find(".donations-total").length).to.equal(1);
  });

  it('do not have .donation-met class if low donations', () => {
    expect(lowDonationComponent.find(".donation-met").length).to.equal(0);
  });

  it('have .donation-met class if donations are above required', () => {
    expect(exactDonationComponent.find(".donation-met").length).to.equal(1);
    expect(highDonationComponent.find(".donation-met").length).to.equal(1);
  });

  it('displays the correct month', () => {
    let currentMonth = new Date().getMonth() + 1;
    currentMonth = numberToMonth(currentMonth);
    expect(lowDonationComponent.text()).contains(currentMonth);
    expect(exactDonationComponent.text()).contains(currentMonth);
    expect(highDonationComponent.text()).contains(currentMonth);
  });

  it('displays the correct year', () => {
    let currentYear = new Date().getFullYear();
    expect(lowDonationComponent.text()).contains(currentYear);
    expect(exactDonationComponent.text()).contains(currentYear);
    expect(highDonationComponent.text()).contains(currentYear);
  })

});