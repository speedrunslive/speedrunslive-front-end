import React, { PropTypes } from 'react';
import {numberToMonth} from '../../../../utils';
import './donations.scss';

export const SERVER_COST = 65;

const Donations = ({donations}) => {

  const date = new Date();
  const month = numberToMonth(date.getMonth()+1);
  const year = date.getFullYear();

  if (!donations.amount){return null}

  return (
    <div className="donations">
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=SQ2NXSJRUVWLW"
        target="_blank"
        title="All donations cover monthly server and bandwidth costs. Thanks to all donators!">
        <div>
          SRL server costs - donations for {`${month} ${year}`}
          <div className="donations-bar">
            {renderDonationTotal(donations.amount)}
          </div>
          <div>
            raised <strong>${donations.amount.toFixed(2)}</strong> out of <strong>${SERVER_COST}</strong>
          </div>
        </div>
      </a>
    </div>
  );

  function renderDonationTotal(currentDonations) {
    let donationPercentage = (currentDonations / SERVER_COST)*100;
    if (donationPercentage >= 100) {
      return <div className="donations-total donation-met" style={{ width: '100%' }} />
    } 
    else {
      return <div className="donations-total" style={{ width: `${donationPercentage}%` }} />
    }
  }
}
export default Donations;
