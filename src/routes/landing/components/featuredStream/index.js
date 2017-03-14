import React from 'react';
import './featuredStream.scss';

const FeaturedStream = ({featuredStream}) => {
    const {title,current_viewers,user_name,meta_game,is_racing} = featuredStream;
    const streamUrl = `https://player.twitch.tv/?channel=${user_name}`;
    const chatUrl = `http://www.twitch.tv/${user_name}/chat?darkpopout`

    return (
    <div className="container">
      <div className="featured-stream">
        <div className="video-container col-md-8">
          <div className="stream-data"><strong>{user_name}</strong> <span className="dull">Playing</span> {meta_game}</div>
          <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" is allowfullscreen="true" src={streamUrl}></iframe>
            </div>
          </div>
        </div>
        <div className="chat-container col-md-4">
        <iframe frameBorder="0"
          className="chat_embed"
          scrolling="no"
          id="chat_embed"
          src={chatUrl}>
        </iframe>
        </div>
      </div>
    </div>
  );
};

export default FeaturedStream;