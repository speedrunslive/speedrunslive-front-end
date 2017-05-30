import React from 'react';

import TopRacersContainer from '../../containers/topRacers';      
import GlobalStatsContainer from '../../containers/globalStats';      

const RaceStatsBody = () => {
  return (
    <div className="col-md-9">
      <div className="row">
        <div className="col-md-9"><TopRacersContainer /></div>
        <div className="col-md-3"><GlobalStatsContainer /></div>
      </div>
    </div>
  );
}

export default RaceStatsBody;