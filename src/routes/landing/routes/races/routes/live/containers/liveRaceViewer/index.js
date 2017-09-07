import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchLiveRaceEntrants, addEntrantToStreamList, removeEntrantFromStreamList} from './actions';

import LiveRaceEntrants from '../../components/liveRaceEntrants';
import LiveRaceStreamList from  '../../components/liveRaceStreamList';
import {getRaceEntrantsSelector, getStreamingRaceEntrantsSelector} from '../../selectors';
import './test.scss';

class LiveRaceViewerContainer extends Component {
  constructor(props) {
    super(props);
    const cols = [2,3,4,6,12];
    const colIdx = 4;
    this.state = {colIdx: 3, columns:cols, selected:'race'};
    this.getColumnSize = this.getColumns.bind(this);
    this.handleColChange = this.handleColChange.bind(this);
  }
  componentDidMount() {
    this.props.fetchLiveRaceEntrants(this.props.params.raceId);
  }

  getColumns() {
    return this.state.columns[this.state.colIdx];
  }

  handleColChange(direction) {
    if (direction>0){
      if (this.state.colIdx>=this.state.columns.length-1) return;
    } else {
      if (this.state.colIdx==0) return;
    }
    
    this.setState({colIdx: this.state.colIdx + direction});
  }

  handleCheckboxChange(checked, player) {
    if (checked) {
      this.props.addEntrantToStreamList(player);
    }
    else {
      this.props.removeEntrantFromStreamList(player);
    }
  }

  handleStreamRemove(player) {
    this.props.removeEntrantFromStreamList(player);
  }

  renderStreamerDropdown(entrants) {
    let streamingEntrants = [];
    for (var i in entrants) {
      if (entrants[i].twitch) {
        const name = entrants[i].twitch.channel.name;
        streamingEntrants.push(<option value={name}> 💬 {name}</option>)
      }
    }
    return streamingEntrants;
  }

  renderSideBar(entrants) {
    // render everything, but only display one thing at a time. 
    // this takes longer to load up front but then no delay when toggling chats.
    let sideBarJsx = [];

    let displayClass = (this.state.selected == 'race') ? 'display' : 'hidden';
    sideBarJsx.push(<div className={displayClass}><LiveRaceEntrants key='race' race={this.props.race} entrants={this.props.entrants} handleCheckboxChange={this.handleCheckboxChange.bind(this)} /></div>);

    for (var i in entrants) {
        if (entrants[i].twitch) {
        const name = entrants[i].twitch.channel.name;
        let displayClass = (this.state.selected == name) ? 'display' : 'hidden';
        sideBarJsx.push(<iframe key={name} className={displayClass} frameBorder="0" scrolling="no" src={`http://www.twitch.tv/${name}/chat?darkpopout`}></iframe>);
      }
    }

    return sideBarJsx;
  }

  render() {
    console.log('this.props.streamingEntrants:', this.props.streamingEntrants);

    if (!this.props.entrants) return null; //Loading
    if (!this.props.race) return null; // Loading

    return (
      <div className='live-race-viewer-container'>
        <div className='streams-wrapper'>
          <LiveRaceStreamList handleStreamRemove={this.handleStreamRemove.bind(this)} entrants={this.props.streamingEntrants} columns={this.getColumns()} />
        </div>

        <div className='entrants-list'>
          <div className='utility'>
            <img src='https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png' />
            <select onChange={(e)=>{this.setState({selected:e.target.value})}}>
              <option value='race'>Race Details</option>
              {this.renderStreamerDropdown(this.props.streamingEntrants)}
            </select>
            <div onClick={() => this.handleColChange(1)} className='btn blue-hover'>+</div> <div onClick={() => this.handleColChange(-1)} className='btn blue-hover'>-</div>
          </div>
          <div className='sidebar'>
            {this.renderSideBar(this.props.entrants)}
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps (state) { 
 return {
   entrants: getRaceEntrantsSelector(state),
   streamingEntrants: getStreamingRaceEntrantsSelector(state),
   race: state.liveRaceSelected || {}
 }
}

export default connect(mapStateToProps, {fetchLiveRaceEntrants, addEntrantToStreamList, removeEntrantFromStreamList})(LiveRaceViewerContainer);