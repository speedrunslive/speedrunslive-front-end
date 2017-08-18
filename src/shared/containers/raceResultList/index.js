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
    return (
      <div>
        <RaceResultList page={this.props.page} raceResultList={this.props.raceResultList}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    raceResultList: state.raceResultList
  }
}

export default connect(mapStateToProps, {fetchRaceResults})(RaceResultListContainer);
