import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTopRacers} from './actions';
import TopRacers from '../../components/topRacers';
import * as sort from './constants';

class TopRacersContainer extends Component {
  componentDidMount (){
    this.props.fetchTopRacers(sort.RACES_SORT);
  }
  onHeaderClick(column){
    if (this.props.sort != column){
      this.props.fetchTopRacers(column);
    }
  }

  render(){
    return (
      <div>
        <TopRacers racers={this.props.racers} onHeaderClick={this.onHeaderClick.bind(this)}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    racers: state.topRacers.racers,
    sort: state.topRacers.sort
  }
}

export default connect(mapStateToProps,{fetchTopRacers})(TopRacersContainer);