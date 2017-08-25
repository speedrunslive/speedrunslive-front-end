import React from 'react';
import './gameImage.scss';

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