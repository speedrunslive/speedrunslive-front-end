import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGameRules} from './actions';

class GameRulesContainer extends Component {
  componentDidMount() {
    this.props.fetchGameRules(this.props.game);
  } 

  componentWillReceiveProps(newProps) {
    if (newProps.game !== this.props.game) {
      this.props.fetchGameRules(newProps.game);
    }
  }
  
  render() {
    if (!this.props.gameRules) return null;
    return (
      <div className="game-rules-container">
        <h1>Rules</h1>
        <div dangerouslySetInnerHTML={{ __html: this.props.gameRules }}></div>
      </div>
  );
  }
}

const mapStateToProps = (state) => {
  return {
    gameRules: state.gameRules.rules
  }
}

export default connect(mapStateToProps,{fetchGameRules} )(GameRulesContainer);