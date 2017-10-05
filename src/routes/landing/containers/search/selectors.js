import {createSelector} from 'reselect';

const getPlayerResults = state => state.searchResults.player;
const getGameResults = state => state.searchResults.game;

const getSearchResults = (game, player) => {
  let formattedSearchResults = [];
  if(game.length > 0) {
    formattedSearchResults.push({text:'Games'});
    formattedSearchResults.push.apply(formattedSearchResults, game.map(game => {return {url:`/game/${game._source.short}`, text:game._source.name}}));
  }
  if(player.length > 0) {
    formattedSearchResults.push({text:'Players'});
    formattedSearchResults.push.apply(formattedSearchResults, player.map(player => {return {url:`/profile/${player._source.player}`, text: player._source.player}}));
  }
  return formattedSearchResults;
}

export const getSearchResultsSelector = createSelector(
  [getGameResults, getPlayerResults],
  getSearchResults
); 