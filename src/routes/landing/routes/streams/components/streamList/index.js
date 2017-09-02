import React from 'react';
import StreamListItem from '../streamListItem';

import './streamList.scss';

function buildStreamList(stream, onClick){
  return <StreamListItem key={stream.name} onClick={onClick} stream={stream} />;
}

const StreamList = (props) => {
  return (
    <div className="stream-list">
        {props.streams.map((stream)=>{return buildStreamList(stream, props.onClick)})}
    </div>
  );
};

export default StreamList;