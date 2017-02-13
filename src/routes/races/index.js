import React from 'react';
import RacesNavigation from '../../components/racesNavigation'

export default class Races extends React.Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <RacesNavigation />
            </div>
            <div className="col-md-10">
              {this.props.children}
            </div>
          </div>
        </div>
    );
  }
}