import React from 'react';

import './liveRaceStreamList.scss';

const LiveRaceStreamList = (props) => {
  
  if (!props.entrants) {return <div>No one in race..</div>}

  const entrants = props.entrants;
  let columns = 'col-lg-'+ props.columns; 

  function renderStreams(entrants) {
    let streamList = [];
    for (var i in entrants) {
      streamList.push(renderStream(entrants[i]));
    }
    return streamList;
  }

  function renderStream(entrant) {
    if (!entrant.twitch) return null;
    return (
    <div key={entrant.twitch.channel.name} className={`stream ${columns}`}>
      <div className='stream-header'>
        <div>{entrant.twitch.channel.display_name}</div>
        <div onClick={() => props.handleStreamRemove(entrant.twitch.channel.name)} className='text-btn'>X</div>
      </div>
      <img src='http://cdn.speedrunslive.com/images/aspect-ratio-16-9.png' />
      <div className='iframe-wrapper'>
        <iframe is allowfullscreen="true" src={`https://player.twitch.tv/?channel=${entrant.twitch.channel.name}&muted=true&autoplay=true`}></iframe>
      </div>
    </div>
    );
  }

  return (        
  <div className='live-race-stream-list'>
    {renderStreams(entrants)}
  </div>
  );
}

export default LiveRaceStreamList