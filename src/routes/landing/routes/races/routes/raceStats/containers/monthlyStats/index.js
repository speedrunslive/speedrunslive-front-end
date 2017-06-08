import React, {Component} from 'react';
import {connect} from 'react-redux';
import MonthlyStats from '../../components/monthlyStats';
import {fetchMonthlyStats} from './actions';

class MonthlyStatsContainer extends Component {
  componentDidMount() {
    if(!this.props.monthlyStats || this.props.monthlyStats.length <= 0){
      this.props.fetchMonthlyStats();
    }
  }
renderMonth(month) {
  return <MonthlyStats stats={month} />;
}
renderYear(year) {
  return (
    <div>
      <h3>{year.year}</h3>
        <div className='year'>
        {year.stats.map(this.renderMonth)}
        </div>
    </div>
  );
}

  render() {
    if (!this.props.monthlyStats || this.props.monthlyStats.length <= 0) return null;
    return (
      <div className="monthly-stats-container">
        <h1>Monthlies</h1>
        {this.props.monthlyStats.map(this.renderYear.bind(this))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    monthlyStats: state.monthlyStats
  }
}

export default connect(mapStateToProps,{fetchMonthlyStats})(MonthlyStatsContainer);
