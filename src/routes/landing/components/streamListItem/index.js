import React from 'react';

import './streamListItem.scss';

const StreamListItem = ({stream}) => {
  console.log(stream);
  return (
    
    <div className="stream-list-item btn-blue-hover">
      <img src={stream.image.size70}></img>
      <div className="stream-info">
        <span className="stream-name">{stream.display_name}</span>
        <span className="stream-title">{stream.title}</span>
        <span className="game-name">{stream.meta_game}</span>
      </div>
    </div>
  );
}
export default StreamListItem;

/*
stream object
api:"twitch"
current_viewers:249
display_name:"Hugo_One"
image:
    size70:"https://static-cdn.jtvnw.net/jtv_user_pictures/hugo_one-profile_image-f41b6c83a4877afa-70x70.jpeg"
is_racing:0
meta_game:"Grand Theft Auto: San Andreas"
name:"hugo_one"
title:"GTA:SA 100% Los Santos and Badlands | !Lottery - Win 25,000 Duckets!"
user_name:"Hugo_One"
*/