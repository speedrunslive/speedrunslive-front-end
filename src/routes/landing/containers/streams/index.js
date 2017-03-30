import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStreams, setFeaturedStream} from './actions';

import FeaturedStream from '../../components/featuredStream';
import StreamList from '../../components/streamList';

class StreamsContainer extends Component {
  constructor(props){
    super(props);
    this.setFeaturedStream = this.setFeaturedStream.bind(this);
  }
  componentDidMount(){
    if (!this.props.streams || this.props.streams.length <= 0) this.props.fetchStreams();
  }

  setFeaturedStream(stream){
    this.props.setFeaturedStream(stream);
  }

  render(){
    if (this.props.streams.length <= 0) return null //put loading animation here
    return (
      <div className="container streams">
        <FeaturedStream featuredStream={this.props.featuredStream }/>
        <StreamList onClick={(stream)=>{this.setFeaturedStream(stream)}} streams={this.props.streams} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    streams: state.streams.all || [],
    featuredStream: state.streams.featuredStream
  }
}

export default connect(mapStateToProps,{fetchStreams, setFeaturedStream})(StreamsContainer);