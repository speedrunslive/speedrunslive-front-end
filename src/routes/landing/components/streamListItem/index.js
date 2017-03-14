import React from 'react';

import './streamListItem.scss';

const StreamListItem = ({stream}) => {
  return (
    <div className="stream-list-item">
      <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/warm_ham-profile_image-652d8c76b70b6c45-70x70.png"></img>
      <div className="stream-info">
        <span className="stream-name">Title</span>
        <p>This is the description of the stream</p>
        <span>Super Mario World</span>
      </div>
    </div>
  );
}
export default StreamListItem;