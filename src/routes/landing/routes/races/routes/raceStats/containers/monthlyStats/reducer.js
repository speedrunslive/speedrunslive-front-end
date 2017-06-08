import {FETCH_MONTHLY_STATS} from './constants';

function monthlyStats (state = [], action) {
  switch(action.type) {
    case FETCH_MONTHLY_STATS:
      const tempStats = injectPercentRaces(action.payload.monthlyStats);
      return aggregateByMonth(tempStats);
    default:
      return state;
  }
}

//input - array of monthly stats
//output - [{year: '2017', stats: array},...]
function aggregateByMonth(monthlyStats) {
  var years = [];
  for (var month in monthlyStats){
    var tempYear = monthlyStats[month].year;
    var yearIdx = years.map(m => {return m.year}).indexOf(tempYear);

    if (yearIdx >= 0) {
      years[yearIdx].stats.push(monthlyStats[month]);
    } else {
      years.push({year: tempYear, stats:[monthlyStats[month]]})
    }
  }
  return years;
}

function injectPercentRaces(monthlyStats) {
  const largestRace = monthlyStats.reduce(getLargestRace).totalRaces;
  for (var month in monthlyStats) {
    var tempMonth = monthlyStats[month];
    var tempPercent = (tempMonth.totalRaces / largestRace) * 100
    tempMonth.percentRaces = tempPercent;
  }
  return monthlyStats;
}

function getLargestRace(monthA,monthB) {
	if(monthA.totalRaces > monthB.totalRaces) {
		return {totalRaces: monthA.totalRaces}
	} else {
		return {totalRaces: monthB.totalRaces}
	}
}


export default monthlyStats;