import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchLiveRaceEntrants, addToSelectedStreamList, removeFromSelectedStreamList, resetSelectedRaceState} from './actions';

import LiveRaceEntrants from '../../components/liveRaceEntrants';
import LiveRaceStreamList from  '../../components/liveRaceStreamList';
import LiveRaceSelectBox from '../../components/liveRaceSelectBox';
import LiveRaceTwitchChats from '../../components/liveRaceTwitchChats';
import {getRaceEntrantsSelector} from '../../selectors';
import './liveRaceViewer.scss';

const RACE_DETAILS = 'Race Details';

/**
 * @class LiveRaceViewerContainer - SRL Live Race viewer page
 * 
 * This container is responsible for fetching racers and mediating all interactions between it's child components and the redux store.
 * It is also responsible for some displaying the sidebar GUI. 
 * 
 * Ideally sidebar should be broken out, but until it's required to be re-usable - will keep as is for 
 * the convenience of passing props to only 1 level of immediate children.
 * 
 * Local State
 * @param {string} selected - current selected value in the dropdown box
 * @param {boolean} sidebarMinimized - toggle sidebar GUI
 * 
 * Redux State
 * @param {Object} race - Main race object from the API
 * @param {Object} entrants - Race entrants, with twitch property null if not streaming
 * @param {Array} selectedStreams - Streams to display on screen
 * 
 */
class LiveRaceViewerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {selected:RACE_DETAILS, sidebarMinimized:true};
    this.callApi = this.callApi.bind(this);
  }

  //Life Cycle Methods
  componentDidMount() {
    const PAGE_UPDATE_INTERVAL = 60000; //60 seconds
    this.callApi();
    this.interval = setInterval(this.callApi, PAGE_UPDATE_INTERVAL);
  }

  componentWillUnmount() {
    this.props.resetSelectedRaceState();
    clearInterval(this.interval);
  }

  render() {
    if (!this.props.race) return null; // Loading
    if (!this.props.entrants) return null; // Loading

    const sidebarStatus = (this.state.sidebarMinimized) ? '' : 'sidebar-minimized'; 

    return (
      <div className={`live-race-viewer-container ${sidebarStatus}`}>
        <div className={`streams-wrapper`}>
          <LiveRaceStreamList removeFromSelectedStreamList={this.props.removeFromSelectedStreamList} selectedStreams={this.props.selectedStreams} />
        </div>

        {this.renderSidebar()}
      </div>
    );
  }

  //Helper Methods
  callApi() {
    this.props.fetchLiveRaceEntrants(this.props.params.raceId);
  }

  handleStreamListChange(isAdded, player) {
    if (isAdded) {
      this.props.addToSelectedStreamList(player);
    }
    else {
      this.props.removeFromSelectedStreamList(player);
    }
  }

  renderEntrants() {
    let displayClass = (this.state.selected === RACE_DETAILS) ? 'display' : 'hidden';
    return (
      <div className={`live-race-entrants-wrapper ${displayClass}`}>
        <LiveRaceEntrants race={this.props.race} entrants={this.props.entrants} handleStreamListChange={this.handleStreamListChange.bind(this)}
                          selectedStreams={this.props.selectedStreams} />
      </div>
    );
  }

  toggleSideBar() {
    this.setState({sidebarMinimized: !this.state.sidebarMinimized});
  }

  handleSelectBoxChange(optionSelected) {
    this.setState({selected: optionSelected}); 
  }

  renderSidebar() {
    return (
      <div className={`sidebar`}>
        <span onClick={this.toggleSideBar.bind(this)} className='arrow'>&nbsp;</span>
        <Link to="/races/live"><span className='srl-logo'>&nbsp;</span></Link>
        <LiveRaceSelectBox key={this.props.race.id} defaultOption={RACE_DETAILS} options={this.props.selectedStreams} 
                           handleSelectBoxChange={this.handleSelectBoxChange.bind(this)} />

        {this.renderEntrants()}

        <LiveRaceTwitchChats streams={this.props.selectedStreams} selectedChat={this.state.selected}/>
      </div>
    );
  }
}
function mapStateToProps (state) { 
 return {
   entrants: getRaceEntrantsSelector(state),
   race: state.liveRaceSelected.race || {},
   selectedStreams: state.liveRaceSelected.selectedStreams
 }
}

export default connect(mapStateToProps, {fetchLiveRaceEntrants, addToSelectedStreamList, 
                                        removeFromSelectedStreamList, resetSelectedRaceState})(LiveRaceViewerContainer);