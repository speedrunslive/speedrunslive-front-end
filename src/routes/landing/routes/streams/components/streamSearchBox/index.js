import React from 'react';
import './streamSearchBox.scss';
/**
 * StreamSearchBox - simple search box
 * 
 * @param {function} onChange - callback function, allow parent to handle when the input changes
 */
const StreamSearchBox = (props) => {
  return (
    <div className='stream-search-box'>
      <input onChange={(e) => props.onChange(e.currentTarget.value)} type='text' placeholder='Search Streams' />
    </div>
  );
}

export default StreamSearchBox;