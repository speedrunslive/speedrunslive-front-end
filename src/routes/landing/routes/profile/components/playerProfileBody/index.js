import React from 'react';  

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';
import PlayerDataContainer from '../../containers/playerData';
import PlayerGameListContainer from '../../containers/playerGameList';

const PlayerProfileBody = (props) => {
  const {page, game, player} = props.params;

  function pathValidation() {
    if (!page || !Number.isInteger(page) || page < 1) {
      // page is invalid. Redirect
    }
  }

  function renderParam(param) {
    return <p>{param}</p>;
  }

  return (
    <div className='player-profile-body'>
      <div className='col-md-2'>
        <PlayerDataContainer player={player} />
      </div>

      <div className='col-md-4'>
        <PlayerGameListContainer player={player} />
      </div>
      
      <div className='col-md-6'>
        <h1>Stats</h1>
        <p>Nerdy Numbers</p>
        
        <RaceResultListContainer player={player} game={game} page={page} pageSize={16}/>

      </div>
    </div>
  );
}

export default PlayerProfileBody;