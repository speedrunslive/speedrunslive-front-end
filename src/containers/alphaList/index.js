import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchGameList } from '../../actions';
import AlphaList from '../../components/alphaList';

class AlphaListContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGameList({ sort: 'name', order: 'ASC' }));
  };

  render() {
    return (
        <AlphaList games={this.props.games}/>
    );
  }
}

AlphaListContainer.propTypes = {
    games: PropTypes.array.isRequired
};

export function mapStateToProps(state) {
  return {
      games: state.gameList.items || []
  }
}

export default connect(mapStateToProps)(AlphaListContainer);