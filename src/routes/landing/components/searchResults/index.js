import React from 'react';
import {Link, withRouter} from 'react-router';

import './searchResults.scss';

/**
 * SearchResults - Display a list of clickable items
 * 
 * Use OnMouseDown because it is triggered first before a click event. 
 * If we don't use, then onBlur in a textbox triggers before the click, and no objects are clickable.
 * 
 * @param {Array} searchResults - List of objects to display.
 * @param {showResults} showResults - if true than display this component
 * 
 */
const SearchResults = withRouter((props) => {
  const {searchResults, showResults} = props;

  if (!showResults) return null;
  return (
    <ul className='search-results'>
      {searchResults.map(renderResult)}
    </ul>
  );

  function handleMouseDown(url) {
    props.router.push(url);
  }

  function renderResult(result) {
    if(result.url) {
      return <li className='result-item' onMouseDown={() => handleMouseDown(result.url)}>{result.text}</li>;
    } else {
      return <li className='result-category'>{result.text}</li>
    }
  }
});
export default SearchResults;