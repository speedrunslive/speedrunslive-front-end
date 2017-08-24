import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchGameRules} from './actions';

class GameRulesContainer extends Component {
  componentDidMount() {
    this.props.fetchGameRules(this.props.game);
  } 
  
  render() {
    if (!this.props.gameRules) return null;
    return <div className="game-rules-container" dangerouslySetInnerHTML={{__html: this.props.gameRules}}></div>
  }
}

const mapStateToProps = (state) => {
  return {
    gameRules: state.gameRules.rules
  }
}

export default connect(mapStateToProps,{fetchGameRules} )(GameRulesContainer);