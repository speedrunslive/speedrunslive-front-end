import React from 'react';
import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';

const GameBody = (props) => {
  return (
    <div className="gameBody">
      <div className="row">
        <div className="col-md-3"><h1>Game Leaderboard Container</h1>All the nerds go here</div>
        <div className="col-md-6"><RaceResultListContainer game={props.params.game} page={props.params.page} pageSize={16} /></div>
        <div className="col-md-3">
          <h1>Game Image Container</h1>
          <object data="http://cdn.speedrunslive.com/images/games/smw.jpg">
            <img src="http://cdn.speedrunslive.com/images/games/noimage.jpg" alt="smw" />
          </object>
          <h1>Game Rules Container</h1>
          <p>Rules.</p>
          <p>Here are the rules.</p>
          <p>What are the rules?What are the rules?What are the rules?What are the rules?What are the rules?What are the rules?What are the rules?</p>
          <p>There are the rules.</p>

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