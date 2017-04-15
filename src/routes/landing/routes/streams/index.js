import React from 'react';
import {Link} from 'react-router';

const Streams = (props)=>{
  return(
    <div className="container">
      {props.children}
    </div>
  );
}
export default Streams;