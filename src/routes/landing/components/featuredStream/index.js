import React from 'react';
import './featuredStream.scss';

const FeaturedStream = ({featuredStream}) => {

    if (!featuredStream){return <div>SELECT A STREAM</div>}

    const {title,current_viewers,display_name,name,meta_game,is_racing} = featuredStream;
    const streamUrl = `https://player.twitch.tv/?channel=${name}`;
    const chatUrl = `http://www.twitch.tv/${name}/chat?darkpopout`
    return (
      <div className="featured-stream">
        <div className="video-container col-md-8">
          <div className="stream-data"><strong>{display_name}</strong> <span className="dull">Playing</span> {meta_game}</div>
          <div className="video-detail">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" is allowfullscreen="true" src={streamUrl}></iframe>
            </div>
          </div>
        </div>
        <div className="chat-container col-md-4">
        <div className="embed-responsive chat">
        <iframe frameBorder="0"
          className="embed-responsive-item"
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