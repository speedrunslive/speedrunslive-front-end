import React from 'react';

import './liveRaceTwitchChats.scss';

/**
 * LiveRaceTwitchChats - Returns a list of <iframe> twitch chats.
 *                       All are 'display:none' except for props.selectedChat
 * 
 * @param {Object} props.streams - Twitch stream names. 
 * @param {string} props.selectedChat - callback, to allow parent to handle when a streams 'X' button is clicked.
 */
const LiveRaceTwitchChats = (props) => {
  return (
    <div className='live-race-twitch-chats'>
      {renderTwitchChats(props.streams, props.selectedChat)}
    </div>
  );

  
  function renderTwitchChats(streams, selectedChat) {
    let twichChatList = [];
    for (var i in streams) {
        const currentStream = streams[i];
        let displayClass = (selectedChat === currentStream) ? 'display' : 'hidden';
        twichChatList.push(<iframe key={currentStream} 
                                    className={displayClass} 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    src={`http://www.twitch.tv/${currentStream}/chat?darkpopout`}></iframe>);
    }
    return twichChatList;
  }
}

export default LiveRaceTwitchChats;