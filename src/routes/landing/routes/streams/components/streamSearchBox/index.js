import React from 'react';
import './streamSearchBox.scss';
const StreamSearchBox = (props) => {
  return (
    <div className='stream-search-box'>
      <input onChange={(e) => props.onChange(e.currentTarget.value)} type='text' placeholder='Search Streams' />
    </div>
  );
}

export default StreamSearchBox;