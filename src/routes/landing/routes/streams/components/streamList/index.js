import React from 'react';
import StreamListItem from '../streamListItem';

import './streamList.scss';

/**
 * StreamList - build list of <StreamListItem />
 * 
 * @param {function} onClick - callback for parent to handle when a particular child is clicked
 * @param {Array} streams - list of stream objects, to build <StreamListItem /> from each
 */
const StreamList = (props) => {
  return (
    <div className="stream-list">
        {props.streams.map((stream)=>{return buildStreamList(stream, props.onClick)})}
    </div>
  );

  function buildStreamList(stream, onClick){
    return <StreamListItem key={stream.name} onClick={onClick} stream={stream} />;
  }
};

export default StreamList;