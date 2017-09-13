import React from 'react';
import './liveRaceSelectBox.scss';

/**
 * LiveRaceSelectBox - <select> drop down
 * 
 * @param {string} defaultOption - defaultOption will be the 1st object displayed 
 * @param {array} options - list of all options
 * @param {function} handleSelectBoxChange - callback, allows parent to control when the box has changed
 */
const LiveRaceSelectBox = (props) => {
    function renderDropdownOption(optionText) {
    return <option key={optionText} value={optionText}> {optionText}</option>;
  }
  return (
    <select className="live-race-select-box" onChange={(e)=>{props.handleSelectBoxChange(e.target.value)}}>
      {renderDropdownOption(props.defaultOption)}
      {props.options.map(renderDropdownOption)}
    </select>
  );
}

export default LiveRaceSelectBox;