import {createSelector} from 'reselect';

const streams = state => state.streams.all;
const filterText = state => state.streams.filterText;

const contains = (parent, child) => {
  return parent.toLocaleLowerCase().indexOf(child.toLocaleLowerCase()) > -1;
}

// Takes a list of all streams and filters out by a search string
const getStreams = (all, filterText) => {
  const selectedStreams = all.filter((stream) => {
    return (contains(stream.display_name,filterText) || contains(stream.meta_game, filterText) || contains(stream.title,filterText) || filterText.length === 0);
  });

  return selectedStreams;
}

export default createSelector(
  streams,
  filterText,
  getStreams
);