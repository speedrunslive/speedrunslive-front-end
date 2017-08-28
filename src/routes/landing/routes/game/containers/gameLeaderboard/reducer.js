import {FETCH_GAME_LEADERBOARD} from './constants';

const gameLeaderboard = (state={}, action) => {
  switch(action.type) {
    case FETCH_GAME_LEADERBOARD:
      action.payload.unranked = steralizeUnrankedStats(action.payload.unranked);
      action.payload.leaders = aggregatePlayersByPercentile(action.payload.leaders);
      return action.payload;
    default:
      return state;
  }
}

function steralizeUnrankedStats(unranked){
  for(var i in unranked) {
    unranked[i].rank = '';
    unranked[i].trueskill = null;
  }
  return unranked;
}

// TODO: The manipulation in function is something that should be fed from the API. Not arranged in front end.
function aggregatePlayersByPercentile(leaders) {
  let currentWorkingPercentile = 1;
  let tempLeadersArray = [];
  let aggregateArray = [];
  for (var i in leaders) {
    let percentRank = (( (i) / leaders.length ) * 100 );
    let percentile = getPercentile(percentRank);
    if (currentWorkingPercentile != percentile) {
      aggregateArray.push({percentile:currentWorkingPercentile, leaders:tempLeadersArray});
      currentWorkingPercentile = percentile;
      tempLeadersArray = [];
      tempLeadersArray.push(leaders[i]);
    }
    else {
      tempLeadersArray.push(leaders[i]);
    }
  }
  aggregateArray.push({percentile:currentWorkingPercentile, leaders:tempLeadersArray});

  return aggregateArray;
}

function getPercentile(percentRank) {
  let percentile;
  if ( percentRank <= 1 ) percentile = 1;
  else if ( percentRank <= 3 ) percentile = 2;
  else if ( percentRank <= 6 ) percentile = 3;
  else if ( percentRank <= 12 ) percentile = 4;
  else if ( percentRank <= 28 ) percentile = 5;
  else if ( percentRank <= 55 ) percentile = 6;
  else percentile = 7;
  return percentile;
}

export default gameLeaderboard;