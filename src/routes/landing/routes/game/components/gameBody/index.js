import React from 'react';

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';
import GameImage from '../gameImage';
import GameRulesContainer from '../../containers/gameRules';
import GameStatsContainer from '../../containers/gameStats';
import TrackedGoalsContainer from '../../containers/trackedGoals';
import GameLeaderboardContainer from '../../containers/gameLeaderboard';

/**
 * GameBody - SRL game page
 * Reads in params passed through url (react-router) and disseminates to children
 * 
 * ex. speedrunslive.com/game/{game}/{page}
 * 
 * @param {any} params.game - game abbreviation
 * @param {any} params.page - current page 
 */
const GameBody = (props) => {
  return (
    <div className="gameBody">
      <div className="row">
        <div className="col-md-3">
          <GameLeaderboardContainer game={props.params.game}/>
        </div>

        <div className="col-md-6">
          <RaceResultListContainer game={props.params.game} page={props.params.page} pageSize={16} />
        </div>

        <div className="col-md-3">
          <GameImage game={props.params.game} />
          <GameRulesContainer game={props.params.game} />
          <GameStatsContainer game={props.params.game} />
          <TrackedGoalsContainer game={props.params.game}/>
        </div>
      </div>
    </div>
  );
}

export default GameBody;