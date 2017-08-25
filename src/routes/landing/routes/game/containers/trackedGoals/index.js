import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTrackedGoals} from './actions';

import TrackedGoals from '../../components/trackedGoals';

class TrackedGoalsContainer extends Component {
  componentDidMount() {
    let season = 0;
    this.props.fetchTrackedGoals(this.props.game, season);
  }
  render() {
    return <TrackedGoals trackedGoals={this.props.trackedGoals} />
  }
}

function mapStateToProps(state) {
  return {
    trackedGoals: state.trackedGoals
  }
}

export default connect(mapStateToProps, {fetchTrackedGoals})(TrackedGoalsContainer);