import React, {Component} from 'react';
import {convertSecondsToRaceTime} from '../../../../../../../../utils';

/**
 * @class LiveRaceTimer - Display a running stopwatch of format HH:MM:SS
 * @param {number} start - Unix Timestamp, start of race.
 */
class LiveRaceTimer extends Component {
  constructor(props) {
    super(props);
    // multiply by 1000 as Date needs milliseconds, opposed to seconds. 
    const start = new Date(props.start * 1000);
    const now = new Date();
    const timeEllapsed = Math.trunc((now - start)/ 1000);

    this.state = {ellapsed: timeEllapsed, start: start};

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ellapsed:this.state.ellapsed + 1});

    // re-sync timer every 5 minute interval
    if (this.state.ellapsed % 300 === 0 ) {
      const now = new Date();
      const timeEllapsed = Math.trunc((now - this.state.start)/ 1000);
      this.setState({ellapsed:timeEllapsed});
    }
  }

  render() {
    return <span>{convertSecondsToRaceTime(this.state.ellapsed)}</span>
  }
}

export default LiveRaceTimer;