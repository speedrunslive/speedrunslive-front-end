import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';

counterpart.registerTranslations('en', require('./translations/en'));

/**
 * PastResults - Display past race results
 * 
 * @param {number} params.page - current page number, grabbed off url 
 */
const PastResults = (props) => {
  return (
    <div className="pastResults">
      <div className="col-md-7">
        <RaceResultListContainer page={props.params.page} pageSize={16} />
      </div>
    </div>
  );
}

export default PastResults;