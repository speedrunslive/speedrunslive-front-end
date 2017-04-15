import React from 'react';
import {Link} from 'react-router';

const PromoBody = () => {
  return (
    <div className = "container">
      <h1>New Twitch promotion buttons</h1>

      <p>We've built an <a href="http://imgur.com/a/HOQJ6">Imgur album</a> for the new Twitch banners, which must be exactly 320px wide. 
      Feel free to use any images you find. Here is the template image (simply drop your art on a layer below):</p>

      <img src="http://i.imgur.com/i6Q0K.png" alt="template" />

      <p>Save the result as a flat JPG. Make sure the image links back to <em>http://www.speedrunslive.com/</em></p>

      <hr/>

      <h1>Logo for use on stream</h1>

      <img src="http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_outline.png"/>
      <img src="http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_dropshadow.png"/>
      <img src="http://cdn.speedrunslive.com/images/logo_SpeedRunsLive_noshadow.png"/>
    </div>
  );
}
export default PromoBody;