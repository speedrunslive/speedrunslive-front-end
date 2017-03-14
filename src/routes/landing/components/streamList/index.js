import React from 'react';
import StreamListItem from '../streamListItem';

import './streamList.scss';

function buildStreamList(stream){
  return <StreamListItem stream={stream} />;
}

const StreamList = (props) => {
  return (
    <div className="stream-list row">
      <ul className="media-list col-sm-4">
        {props.streams.map((stream)=>{return buildStreamList(stream)})}
      </ul>
    </div>
  );
};

export default StreamList;