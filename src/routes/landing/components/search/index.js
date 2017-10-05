import React from 'react';
import './search.scss';

/**
 * Search - simple search box
 * 
 * @param {function} {onChange} - callback function, let parent handle when input is changed
 * @param {function} {onBlur} - callback function, let parent handle when input is no longer in focus
 * @param {string} {placeholder} - placeholder text in textbox
 */
const Search = (props) => {
  let {onChange, onBlur, placeholder} = props;
  return (
    <input className='search' onChange={onChange} onBlur={onBlur} placeholder={placeholder} />
  );
}

export default Search;