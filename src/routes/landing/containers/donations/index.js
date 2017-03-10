import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchDonations } from './actions';
import Donations from '../../components/donations';
import {bindActionCreators} from 'redux';

class DonationsContainer extends React.Component {
  componentDidMount() {
    if (this.props.donations) this.props.fetchDonations();
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

function mapStateToProps(state) {
  return {
      donations: state.donations._source || {amount:null}
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchDonations}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(DonationsContainer);