import {FETCH_LIVE_RACE_ENTRANTS, ADD_ENTRANT_TO_STREAM_LIST, REMOVE_ENTRANT_FROM_STREAM_LIST, RESET_SELECTED_RACE_STATE} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUrl,externalApi} from '../../../../../../../../config';

export function fetchLiveRaceEntrants(raceId) {
  //const url = `${apiUrl}/races/${raceId}`;
  const url = `http://api.speedrunslive.com/races/${raceId}`;

  return function(dispatch) {
    fetch(url)
      .then(response => response.json()
        .then(race => dispatch(fetchTwitchStreams(race))));
  }
}

function fetchTwitchStreams(race) {
  //extract a list of twitch streams from our racer list
  const twitchPages = Object.keys(race.entrants).reduce((setStream, name) => {
    if(race.entrants[name].twitch.length > 0) {
      setStream.push([race.entrants[name].twitch]);

    }
    return setStream;
  }, []);

  //query the twitch api
  const url = externalApi['twitch'].getStreamsUrl(twitchPages);
  return function(dispatch) {
    fetch(url)
      .then(response => response.json()
        .then(twitchStreams => dispatch({
          type: FETCH_LIVE_RACE_ENTRANTS,
          race: race,
          twitchStreams: twitchStreams
        })));
  }
}

export function addToSelectedStreamList(entrant) {
  return {
    type: ADD_ENTRANT_TO_STREAM_LIST,
    payload: entrant
  }
}

export function removeFromSelectedStreamList(entrant) {
  return {
    type: REMOVE_ENTRANT_FROM_STREAM_LIST,
    payload: entrant
  }
}

export function resetSelectedRaceState() {
  return {
    type: RESET_SELECTED_RACE_STATE
  }
}