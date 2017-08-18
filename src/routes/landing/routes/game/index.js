import React from 'react';

const Game = (props) => {
  return (
    <div className="container">
        {props.children}
    </div>
  );
}

export default Game;