import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStreams, setFeaturedStream, filterStreams} from './actions';

import FeaturedStream from '../../components/featuredStream';
import StreamList from '../../components/streamList';
import StreamSearchBox from '../../components/streamSearchBox';

import StreamSelector from '../../selectors/filteredStreams';

class StreamsContainer extends Component {
  componentDidMount(){
    if (!this.props.streams || this.props.streams.length <= 0) this.props.fetchStreams();
    this.props.filterStreams('');
  }

  render(){
    //if (this.props.streams.length <= 0) return null //put loading animation here
    return (
      <div className="container streams">
        <FeaturedStream featuredStream={this.props.featuredStream}/>
        <StreamSearchBox onChange={(text)=>{this.props.filterStreams(text)}} />
        <StreamList onClick={(stream)=>{this.props.setFeaturedStream(stream)}} streams={this.props.streams} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    streams: StreamSelector(state) || [],
    featuredStream: state.streams.featuredStream
  }
}

export default connect(mapStateToProps,{fetchStreams, setFeaturedStream, filterStreams})(StreamsContainer);