import React, { PropTypes } from 'react';
import './donations.scss';

const SERVER_COST = 65;
const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const date = new Date();
const month = months[date.getMonth()];
const year = date.getFullYear();

function getPercentage(currentDonations){
  return ((currentDonations / SERVER_COST)*100) + '%';
}

const Donations = ({donations}) => {

  if (!donations.amount){return null}

  return (
    <div className="donations col-md-7">
      <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=SQ2NXSJRUVWLW"
        target="_blank"
        title="All donations cover monthly server and bandwidth costs. Thanks to all donators!">
        <div className="">
          SRL server costs - donations for {`${month} ${year}`}
          <div className="donations-bar">
            <div className="donations-total" style={{ width: getPercentage(donations.amount) }} />
          </div>
          <div>
            raised <strong>${donations.amount}</strong> out of <strong>${SERVER_COST}</strong>
          </div>
        </div>
      </a>
    </div>
  )
}
export default Donations;
