import React from 'react';
import {Link} from 'react-router';

const Channel = (props)=>{
  return(
    <div className="container">
      {props.children}
    </div>
  );
}
export default Channel;