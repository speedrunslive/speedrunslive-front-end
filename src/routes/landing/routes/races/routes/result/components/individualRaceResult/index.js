import React from 'react';
import RaceResultListContainer from '../../../../../../../../shared/containers/raceResultList';

const IndividualRaceResult = (props) => {
  const {raceId} = props.params;
  return (
    <div className="col-md-7">
      <RaceResultListContainer raceId={raceId}/>
    </div>
  );
}

export default IndividualRaceResult;