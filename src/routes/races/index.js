import React from 'react';
import RacesNavigation from '../../components/racesNavigation'

export default class Races extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <RacesNavigation />
            {this.props.children}
          </div>
        </div>
    );
  }
}