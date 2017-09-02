import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLiveRaces} from './actions';

import LiveRacesList from '../../components/liveRacesList';

class LiveRacesListContainer extends Component {
  constructor(props) {
    super(props);
    this.callApi = this.callApi.bind(this);
  }
  componentDidMount() {
    const PAGE_UPDATE_INTERVAL = 30000; //30 seconds

    this.callApi();
    this.interval = setInterval(this.callApi, PAGE_UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  callApi() {
    this.props.fetchLiveRaces();
  }

  render() {
    if (!this.props.liveRaces.races) return null;
    return (
      <LiveRacesList races={this.props.liveRaces.races} />
    );
  }

}
function mapStateToProps(state) {
  return {
    liveRaces: state.liveRaces
  }
}

export default connect(mapStateToProps, {fetchLiveRaces})(LiveRacesListContainer);