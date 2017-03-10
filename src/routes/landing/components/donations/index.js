import React, { PropTypes } from 'react';

const Donations = (props) => {
  return (
    <div>
        We only have {`$${props.donations.amount}`}
    </div>
  )
}
export default Donations;
