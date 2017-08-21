import React from 'react';
import './gameImage.scss';

const GameImage = (props) => {
  return ( 
     <object className="game-image" data={`http://cdn.speedrunslive.com/images/games/${props.game}.jpg`} >
      <img src="http://cdn.speedrunslive.com/images/games/noimage.jpg" alt={props.game} />
    </object>
  );
}

export default GameImage;