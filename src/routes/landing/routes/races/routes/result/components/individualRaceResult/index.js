import React from 'react';
import RaceResultListContainer from '../../../../../../../../shared/containers/raceResultList';

/**
 * IndividualRaceResult - display single race result
 *                      - achieved by calling RaceResultListContainer with a single raceId
 * 
 * @param {string} params.raceId - unique race id, grabbed off url 
 */
const IndividualRaceResult = (props) => {
  const {raceId} = props.params;
  return (
    <div className="col-md-7">
      <RaceResultListContainer raceId={raceId}/>
    </div>
  );
}

export default IndividualRaceResult;