import React from 'react';

const spinnerUrl = 'http://cdn.speedrunslive.com/images/ajax-loader.gif';

/**
 * LoadingSpinner - display a loading spinner
 * 
 * @param {boolean} isActive - Should component display?
 * @param {Object} style - react css style object to apply to this component
 */
const LoadingSpinner = (props) => {
  const {isActive, style} = props;
  if (!isActive) return null;
  return (
    <img src={spinnerUrl} alt='loading spinner' style={style}/> 
  );
}
export default LoadingSpinner;