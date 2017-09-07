import {createSelector} from 'reselect';

const getSrlData = state => state.liveRaceSelected.srlData;
const getTwitchStreams = state => state.liveRaceSelected.twitchStreams;
const getSelectedStreams = state => state.liveRaceSelected.selectedStreams

// Returns the same object as srlData.entrants - but embeds twitchApi data
const getRaceEntrants = (srlData, twitchStreams) => {
  let entrants = JSON.parse(JSON.stringify(srlData)).entrants; //clone because you shouldn't modify state directly.
  for (var i in entrants) {
    let streamIdx = twitchStreams.streams.findIndex(p => p.channel.name.toLocaleLowerCase() == entrants[i].twitch.toLocaleLowerCase());
    if (streamIdx >= 0) {
      entrants[i].twitch = twitchStreams.streams[streamIdx];
    } else {
      entrants[i].twitch = null;
    }
  }
  return entrants;
}
export const getRaceEntrantsSelector = createSelector(
  [getSrlData, getTwitchStreams],
  getRaceEntrants
);



// Returns the list of all entrants, the viewer selected to watch
const getStreamingRaceEntrants = (entrants, selectedStreams) => {
  let streamingEntrants = [];
  for (var i in entrants) {
    if (entrants[i].twitch){
      let streamIdx = selectedStreams.findIndex(p => p.toLocaleLowerCase() == entrants[i].twitch.channel.name.toLocaleLowerCase());
      if (streamIdx >= 0) {
        streamingEntrants.push(entrants[i]);
      } 
    }
  }

  return streamingEntrants;
}
export const getStreamingRaceEntrantsSelector = createSelector(
  [getRaceEntrantsSelector, getSelectedStreams],
  getStreamingRaceEntrants
);