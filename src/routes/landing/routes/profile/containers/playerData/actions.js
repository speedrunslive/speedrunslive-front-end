import {FETCH_PLAYER_DATA} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUrl, externalApi} from '../../../../../../config';

export function fetchPlayerData(player) {
  //const url = `${apiUrl}/players/${player}`;
  const url = `http://api.speedrunslive.com/players/${player}`;

  return function (dispatch) {
    fetch(url)
      .then(response => {
        response.json()
          .then(srlData => 
            dispatch(fetchStreamServiceData(player, srlData))
          )});
    }
  }

export function fetchStreamServiceData(player, srlData) {

  const url = externalApi[srlData.api].getChannelUrl(player);

  return function (dispatch) {
    fetch(url)
      .then(response => {
        response.json()
          .then(externalData => 
            dispatch({
              type:FETCH_PLAYER_DATA,
              externalData:externalData,
              srlData:srlData
            })
          )});
    }

}
