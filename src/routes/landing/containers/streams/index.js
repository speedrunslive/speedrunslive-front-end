import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchStreams} from './actions';

import FeaturedStream from '../../components/featuredStream';
import StreamList from '../../components/streamList';

class StreamsContainer extends Component {
  constructor(props){
    super(props);
    this.changeStream = this.changeStream.bind(this);
    this.state = {};
  }
  componentDidMount(){
    if (!this.props.streams || this.props.streams.length <= 0) this.props.fetchStreams();
  }

  changeStream(stream){
    console.log(stream);
    this.setState({featuredStream:stream});
  }

  render(){

    const featured = (!this.state.featuredStream) ? this.props.featuredStream : this.state.featuredStream;
    console.log(featured);
    if (this.props.streams.length <= 0) return <div>Loading...</div>
    return (
      <div className="container streams">
        <FeaturedStream featuredStream={featured}/>
        <StreamList onClick={(stream)=>{this.changeStream(stream)}} streams={this.props.streams} />
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log("in mapStateToProps");
  return {
    streams: state.streams || [],
    featuredStream: state.streams[0]
  }
}

export default connect(mapStateToProps,{fetchStreams})(StreamsContainer);