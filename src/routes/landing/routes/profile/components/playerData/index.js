import React from 'react';
import {Link} from 'react-router';

import './playerData.scss';

const PlayerData = (props) => {
  const {name,channel,api,twitter,youtube,country} = props.playerData.srl;
  const {logo} = props.playerData.external;

  let socialMedia = {
    twitter: {image:'http://cdn.speedrunslive.com/images/twitter_icon20px.png', url:'https://www.twitter.com/'},
    youtube: {image:'http://cdn.speedrunslive.com/images/youtube_icon20px.png', url:'https://www.youtube.com/'},
    twitch: {image:'http://cdn.speedrunslive.com/images/ttv_icon20px.png', url:'https://www.twitch.tv/'},
    hitbox: {image:'http://cdn.speedrunslive.com/images/hb_icon20px.png', url:'https://www.hitbox.tv/'},
  };

  function renderSocialButton(userName, site) {
    if (!userName) return null;
    return (
      <a href={socialMedia[site].url + userName} className='social-media-button'> 
        <img src={socialMedia[site].image} />
      </a>
    );
  }

  return (
    <div className='player-data'>
      <h1>{name}</h1>
      {(logo) ? <img className='player-image' src={logo} /> : null}
      <div className='social-media-section'>
        {renderSocialButton(channel, api)}
        {renderSocialButton(twitter, 'twitter')}
        {renderSocialButton(youtube, 'youtube')}
      </div>
    </div>
  );
}

export default PlayerData;