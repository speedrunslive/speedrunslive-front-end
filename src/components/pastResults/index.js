import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './pastResults.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

counterpart.registerTranslations('en', require('./translations/en'));

export default class PastResults extends React.Component {
  render() {
    return (
        <div className="pastResults">
            <div className="col-md-6">
              <h1><Translate content="pastResults.heading"/></h1>
              <button className="btn first"></button>
              <button className="btn prev"></button>
              <button className="btn first"></button>
              <button className="btn last"></button>
            </div>
        </div>
    );
  }
}