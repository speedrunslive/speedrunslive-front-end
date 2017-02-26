import React from 'react';
import {Link} from 'react-router';

const Promotion = (props) => {
  return (
    <div className = "container">
      {props.children}
    </div>
  );
}
export default Promotion;