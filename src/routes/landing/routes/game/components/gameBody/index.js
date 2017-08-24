import React from 'react';

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';
import GameImage from '../gameImage';
import GameRulesContainer from '../../containers/gameRules';

const GameBody = (props) => {
  return (
    <div className="gameBody">
      <div className="row">
        <div className="col-md-3"><h1>Game Leaderboard Container</h1>All the nerds go here</div>
        <div className="col-md-6"><RaceResultListContainer game={props.params.game} page={props.params.page} pageSize={16} /></div>
        <div className="col-md-3">
          <GameImage game={props.params.game} />
          
          <h1>Rules</h1>
          <GameRulesContainer game={props.params.game} />

          <h1>Game Stats Container</h1>
          <ul>
            <li>Abbreviation: <strong>game</strong></li>
            <li>Races: <strong>123</strong></li>
            <li>Players: <strong>456</strong></li>
            <li>Time Played: <strong>1yr 17wks 6days</strong></li>
            <li>Largest Race: <strong>789</strong></li>
          </ul>

          <h1>Best Race Times Container</h1>
          <p>Times</p>
          <p>Times</p>
        </div>
      </div>
    </div>
  );
}

export default GameBody;