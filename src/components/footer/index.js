import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import './footer.scss';

counterpart.registerTranslations('en', require('./translations/en'));

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <em>
            <div className="pull-left">SpeedRunsLive © {new Date().getFullYear()}</div>
            <div className="pull-right">
              <Link to="/news" className="linktext"><Translate content="footer.news"/></Link>
              <Link to="/" className="linktext"><Translate content="footer.contact"/></Link>
              <Link to="/promotion" className="linktext"><Translate content="footer.promotion"/></Link>
              <a href="https://twitter.com/#!/SpeedRunsLive" className="linktext"><Translate content="footer.twitter"/></a>
              <Link to="/about" className="linktext"><Translate content="footer.about"/></Link>
              <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SQ2NXSJRUVWLW" className="linktext"><Translate content="footer.donate"/></a>
            </div>
          </em>
        </div>
      </footer>
    );
  }
}