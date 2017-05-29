import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTopRacers} from './actions';
import TopRacers from '../../components/topRacers';

class TopRacersContainer extends Component {
  componentDidMount (){
    this.props.fetchTopRacers(15);
  }
  render(){
    return (
      <div>
        <TopRacers topRacers={this.props.topRacers}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    topRacers: state.topRacers
  }
}

export default connect(mapStateToProps,{fetchTopRacers})(TopRacersContainer);