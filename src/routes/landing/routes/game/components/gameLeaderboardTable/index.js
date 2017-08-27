import React from 'react';

import './gameLeaderboardTable.scss';

const GameLeaderboardTable = (props) => {
  const {leaders, percentile} = props;

  function renderTableRow(player) {
    return (
      <tr>
        <td>{(player.rank) ? `#${player.rank}` : null}</td>
        <td>{player.name}</td>
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
