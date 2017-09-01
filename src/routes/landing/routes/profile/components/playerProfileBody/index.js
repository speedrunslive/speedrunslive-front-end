import React from 'react';  

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';
import PlayerDataContainer from '../../containers/playerData';
import PlayerGameListContainer from '../../containers/playerGameList';
import PlayerStatsContainer from '../../containers/playerStats';

const PlayerProfileBody = (props) => {
  const {page, game, player} = props.params;

  function pathValidation() {
    if (!page || !Number.isInteger(page) || page < 1) {
      // page is invalid. Redirect
    }
  }

  return (
    <div className='player-profile-body'>
      <div className='col-md-2'>
        <PlayerDataContainer player={player} />
      </div>

      <div className='col-md-4'>
        <PlayerGameListContainer player={player} game={game} />
      </div>
      
      <div className='col-md-6'>
        <PlayerStatsContainer player={player} game={game}/>
        <RaceResultListContainer player={player} game={game} page={page} pageSize={16}/>
      </div>
    </div>
  );
}

export default PlayerProfileBody;