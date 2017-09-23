import React from 'react';
import './gameImage.scss';

/**
 * GameImage - render game image from SRL cdn.
 * If one does not exist, display placeholder image.
 * 
 * @param {string} game - game abbrev to retreive from cdn
 */
const GameImage = (props) => {
  return (
    <div className="game-image">
      <object data={`http://cdn.speedrunslive.com/images/games/${props.game}.jpg`} >
        <img src="http://cdn.speedrunslive.com/images/games/noimage.jpg" alt={props.game} />
      </object>
    </div>
  );
}

export default GameImage;