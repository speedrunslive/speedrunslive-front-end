import {FETCH_TRACKED_GOALS} from './constants';
import fetch from 'isomorphic-fetch';
import {apiUtl} from '../../../../../../utils';

export function fetchTrackedGoals(game, season) {
  //const url = `${apiUrl}/goals/${game}?season=${season}`;
  const url = `http://api.speedrunslive.com/goals/${game}?season=${season}`;
  const goals = fetch(url).then(response => response.json());

  return {
    type: FETCH_TRACKED_GOALS,
    payload: goals
  }
}