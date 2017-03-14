import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStreams} from './actions';

import FeaturedStream from '../../components/featuredStream';
import StreamListItem from '../../components/streamListItem';

class StreamsContainer extends Component {
  componentDidMount(){
    if (!this.props.streams.found) this.props.fetchStreams();
  }

  render(){

    if (!this.props.streams.found) return <div>Loading...</div>

    return (
      <div className="container streams">
        <FeaturedStream featuredStream={this.props.streams._source.channels[2]}/>
        <StreamListItem stream={this.props.streams._source.channels[1]} />
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