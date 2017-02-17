import React from 'react';
import RacesNavigation from '../../components/racesNavigation'

const Races = (props) => {
  return (
    <div className="container">
      <div className="row">
        <RacesNavigation />
        {props.children}
      </div>
    </div>
  );
}

export default Races;