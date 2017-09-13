import {createSelector} from 'reselect';

const getRaceData = state => state.liveRaceSelected.race;
const getTwitchStreams = state => state.liveRaceSelected.twitchStreams;

// Returns the same object as race.entrants - but will only keep twitch property value if racer is streaming.
const getRaceEntrants = (race, twitchStreams) => {
  let entrants = JSON.parse(JSON.stringify(race)).entrants; //clone because you shouldn't modify state directly.
  for (var i in entrants) {
    let streamIdx = twitchStreams.streams.findIndex(p => p.channel.name.toLocaleLowerCase() == entrants[i].twitch.toLocaleLowerCase());
    if (streamIdx === -1) {
      entrants[i].twitch = null;
    }
  }
  return entrants;
}

export const getRaceEntrantsSelector = createSelector(
  [getRaceData, getTwitchStreams],
  getRaceEntrants
);
