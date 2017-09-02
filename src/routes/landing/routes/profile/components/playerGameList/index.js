import React from 'react';
import {Link} from 'react-router';
import {getCssClassForRank} from '../../../../../../utils';

import './playerGameList.scss';

const PlayerGameList = (props) => {
  const {playerGameList, player} = props;


  function renderGame(game, i) {
    const selectedClass = (props.game === game.gameAbbrev) ? 'selected' : ''; 
    let placeColor = getCssClassForRank(i+1);
    return (
        <Link key={game.gameAbbrev} className={`${placeColor} ${selectedClass}`} to={`/profile/${player}/game/${game.gameAbbrev}`}>
          <li>{game.gameName}</li>
        </Link>
    );
  }

  return (
    <div className='player-game-list'>
      <h1>Games</h1>
      <ul>
        <Link to={`/profile/${player}`}>
          <li>Overall Stats</li>
        </Link>
        {playerGameList.map(renderGame)}
      </ul>
    </div>
  );
}

export default PlayerGameList;