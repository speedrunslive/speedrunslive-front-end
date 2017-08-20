import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './pastResults.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import RaceResultListContainer from '../../../../../../shared/containers/raceResultList';

counterpart.registerTranslations('en', require('./translations/en'));

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