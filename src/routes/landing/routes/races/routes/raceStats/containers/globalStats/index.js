import React, {Component} from 'react';
import GlobalStats from '../../components/globalStats';
import {connect} from 'react-redux';
import {fetchGlobalStats} from './actions';

class GlobalStatsContainer extends Component {
  componentDidMount(){
    this.props.fetchGlobalStats();
  }
  render(){
    return (
      <div>
        <GlobalStats globalStats={this.props.globalStats}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    globalStats: state.globalStats
  }
}

export default connect(mapStateToProps, {fetchGlobalStats})(GlobalStatsContainer);
