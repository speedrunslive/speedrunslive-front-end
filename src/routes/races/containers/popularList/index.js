import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPopularList } from './actions';
import PopularList from '../../components/popularList';

class PopularListContainer extends React.Component {
  componentDidMount() {
    if (this.props.games.length === 0) this.props.dispatch(fetchPopularList({ sort: 'popularityrank', order: 'ASC' }));
  };

  render() {
    return (
        <PopularList games={this.props.games}/>
    );
  }
}

PopularListContainer.propTypes = {
    games: PropTypes.array.isRequired
};

PopularListContainer.fetchData = ({ store }) => store.dispatch(fetchPopularList({ sort: 'popularityrank', order: 'ASC' }));

export function mapStateToProps(state) {
  return {
      games: state.popularList.items || []
  }
}

export default connect(mapStateToProps)(PopularListContainer);