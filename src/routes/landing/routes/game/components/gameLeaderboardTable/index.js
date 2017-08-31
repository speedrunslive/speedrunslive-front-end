import React from 'react';
import {Link} from 'react-router';

import './gameLeaderboardTable.scss';

const GameLeaderboardTable = (props) => {
  const {leaders, percentile} = props;

  function renderTableRow(player) {
    return (
      <tr>
        <td>{(player.rank) ? `#${player.rank}` : null}</td>
        <td><Link to={`/profile/${player.name}`}>{player.name}</Link></td>
        <td>{(player.trueskill) ? Math.trunc(player.trueskill) : null}</td>
      </tr>
    );
  }

  return (
    <div className='game-leaderboard-table'>
    <table className={`percentile-${percentile}`}>
      <tbody>
        {
          leaders.map(renderTableRow)
        }
      </tbody>
    </table>
    </div>
  );

}


export default GameLeaderboardTable;
