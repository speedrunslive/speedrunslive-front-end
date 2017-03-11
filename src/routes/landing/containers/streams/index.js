import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStreams} from './actions';

import './streams.scss'

class StreamsContainer extends Component {
  componentDidMount(){
    if (!this.props.streams.found) this.props.fetchStreams();
  }

  render(){

    if (!this.props.streams.found) return <div>Loading...</div>

    const featuredStream = this.props.streams._source.channels[0];
    const {title,current_viewers,user_name,meta_game,is_racing} = featuredStream;
    const streamUrl = `https://player.twitch.tv/?channel=${user_name}`;
    const chatUrl = `http://www.twitch.tv/${user_name}/chat?darkpopout`

    return (
      <div className="container">
        <div className="streams">
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
  }
}

function mapStateToProps(state){
  return {
    streams: state.streams || {}
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchStreams}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamsContainer);