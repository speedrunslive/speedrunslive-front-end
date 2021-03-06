import React from 'react';
import {decodeHtmlEntities} from '../../../../../../utils';

import './streamListItem.scss';


/**
 * StreamListItem - panel to represent a streamer on SRL front page
 * 
 * @param {Object} stream - Object containing stream information
 * @param {function} onClick - callback function, to allow a parent to handle when this component is clicked
 */
const StreamListItem = (props) => {
  
  const stream = props.stream;
  const onClick = props.onClick;
  const featuredStream = (stream.featured) ? 'stream-list-item-selected' : '';

  return (
    <div onClick={()=>{onClick(stream)}} className={`stream-list-item ${featuredStream}`}>
      <img className="stream-icon" src={stream.image.size70}></img>
      <div className="stream-info">
        {renderRacingIcon(stream.is_racing)}
        <span className="stream-name">{stream.display_name}</span>
        <span className="stream-title">{decodeHtmlEntities(stream.title)}</span>
        <span className="game-name">{stream.meta_game}</span>
        <img className="twitch-icon" src="http://cdn.speedrunslive.com/images/ttv_icon20px.png"></img>
        <span className="viewers">{stream.current_viewers}</span>
      </div>
    </div>
  );

  function renderRacingIcon(isRacing) {
    if (isRacing===1) {
      return <img className='racing-icon' src="http://cdn.speedrunslive.com/images/liveraces.png" alt="Is Racing" />
    }
  }
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