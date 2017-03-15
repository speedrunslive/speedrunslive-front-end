import React from 'react';
import StreamListItem from '../streamListItem';

import './streamList.scss';

function buildStreamList(stream){
  return <StreamListItem stream={stream} />;
}

const StreamList = (props) => {
  return (
    <div className="stream-list">
        {props.streams.map((stream)=>{return buildStreamList(stream)})}
    </div>
  );
};

export default StreamList;