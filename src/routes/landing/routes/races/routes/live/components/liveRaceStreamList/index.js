import React from 'react';

import './liveRaceStreamList.scss';

/**
 * LiveRaceStreamList - Display up to 25 streams using a liquid grid system.
 * 
 * @param {Array} props.selectedStreams - Twitch stream names. 
 * @param {function} props.removeFromSelectedStreamList - callback, to allow parent to handle when a streams 'X' button is clicked.
 */
const LiveRaceStreamList = (props) => {
  const selectedStreams = props.selectedStreams;

  return (        
    <div className='live-race-stream-list'>
      {selectedStreams.map(renderStream)}
    </div>
    );

    
  function renderStream(stream) {
    return (
    <div key={stream} className={`stream liquid-${selectedStreams.length}`}>
      <div onClick={() => props.removeFromSelectedStreamList(stream)} className='close-btn'>X</div>
      <div className='iframe-wrapper'>
        <iframe is allowfullscreen="true" src={`https://player.twitch.tv/?channel=${stream}&muted=true&autoplay=true`}></iframe>
      </div>
    </div>
    );
  }
}

export default LiveRaceStreamList