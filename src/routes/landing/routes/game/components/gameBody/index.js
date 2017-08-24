import React from 'react';

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';
import GameImage from '../gameImage';
import GameRulesContainer from '../../containers/gameRules';
import GameStatsContainer from '../../containers/gameStats';

const GameBody = (props) => {
  return (
    <div className="gameBody">
      <div className="row">
        <div className="col-md-3"><h1>Game Leaderboard Container</h1>All the nerds go here</div>
        <div className="col-md-6"><RaceResultListContainer game={props.params.game} page={props.params.page} pageSize={16} /></div>
        <div className="col-md-3">
          <GameImage game={props.params.game} />
          <GameRulesContainer game={props.params.game} />
          <GameStatsContainer game={props.params.game} />

          <h1>Best Race Times Container</h1>
          <p>Times</p>
          <p>Times</p>
        </div>
      </div>
    </div>
  );
}

export default GameBody;