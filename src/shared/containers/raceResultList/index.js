import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchRaceResults} from './actions';
import {Link} from 'react-router';

import RaceResultList from '../../components/raceResultList';

/**
 * Display a race result list. If no input then it displays the most recent 20 races.
 * @param raceId
 * @param page
 * @param pageSize
 * @param player
 * @param game
 */
class RaceResultListContainer extends Component {
  componentDidMount() {
    const {raceId, page, pageSize, player, game} = this.props;
    this.props.fetchRaceResults(raceId, page, pageSize, player, game);
  }

  render() {
    var lastPage = Math.ceil(this.props.count / this.props.pageSize);
    return (
      <div>
        <RaceResultList page={this.props.page} pageSize={this.props.pageSize} lastPage={lastPage} raceResultList={this.props.raceResultList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    raceResultList: state.raceResultList.races || [],
    count: state.raceResultList.count || 0
  }
}

export default connect(mapStateToProps, {fetchRaceResults})(RaceResultListContainer);
