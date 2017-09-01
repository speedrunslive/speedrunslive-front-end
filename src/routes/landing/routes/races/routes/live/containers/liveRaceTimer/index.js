import React, {Component} from 'react';
import {convertSecondsToRaceTime} from '../../../../../../../../utils'

class LiveRaceTimer extends Component {
  constructor(props) {
    super(props);
    
    let start = props.start;
    let now = new Date();
    const timeEllapsed = Math.trunc((now - start)/ 1000);

    this.state = {ellapsed: timeEllapsed}

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick,1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ellapsed:this.state.ellapsed + 1});
  }

  render() {
    return <span>{convertSecondsToRaceTime(this.state.ellapsed)}</span>
  }
}

export default LiveRaceTimer;