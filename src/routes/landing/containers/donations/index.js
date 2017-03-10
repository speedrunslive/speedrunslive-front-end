import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDonations } from './actions';
import Donations from '../../components/donations';
import {bindActionCreators} from 'redux';

class DonationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.donations) this.props.dispatch(fetchDonations());
  };

  render() {
    return (
        <Donations donations={this.props.donations}/>
    );
  }
}

DonationsContainer.propTypes = {
    donations: PropTypes.object.isRequired
};

DonationsContainer.fetchData = ({ store }) => store.dispatch(fetchDonations());

function mapStateToProps(state) {
  return {
      donations: state.donations.items || {}
  }
}

//function mapDispatchToProps(dispatch){
//  return bindActionCreators({search: search}, dispatch);/
//}

export default connect(mapStateToProps)(DonationsContainer);