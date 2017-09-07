import {FETCH_LIVE_RACE_ENTRANTS, ADD_ENTRANT_TO_STREAM_LIST, REMOVE_ENTRANT_FROM_STREAM_LIST} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUrl,externalApi} from '../../../../../../../../config';

export function fetchLiveRaceEntrants(raceId) {
  //const url = `${apiUrl}/races/${raceId}`;
  const url = `http://api.speedrunslive.com/races/${raceId}`;

  return function(dispatch) {
    fetch(url)
      .then(response => response.json()
        .then(srlData => dispatch(fetchTwitchStreams(srlData))));
  }
}

function fetchTwitchStreams(srlData) {
  //extract a list of twitch streams from our racer list
  const twitchPages = Object.keys(srlData.entrants).reduce((setStream, name) => {
    if(srlData.entrants[name].twitch.length > 0) {
      return setStream.concat([srlData.entrants[name].twitch]);
    }
  }, []);

  //query the twitch api
  const url = externalApi['twitch'].getStreamsUrl(twitchPages);
  return function(dispatch) {
    fetch(url)
      .then(response => response.json()
        .then(twitchStreams => dispatch({
          type: FETCH_LIVE_RACE_ENTRANTS,
          srlData: srlData,
          twitchStreams: twitchStreams
        })));
  }
}

export function addEntrantToStreamList(entrant) {
  return {
    type: ADD_ENTRANT_TO_STREAM_LIST,
    payload: entrant
  }
}

export function removeEntrantFromStreamList(entrant) {
  return {
    type: REMOVE_ENTRANT_FROM_STREAM_LIST,
    payload: entrant
  }
}