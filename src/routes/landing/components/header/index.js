import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation';
import DonationsContainer from '../../containers/donations';
import SearchContainer from '../../containers/search';

import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-4"><Link to="/"><div className="srl-logo"></div></Link></div>
          <div className="col-md-4"><DonationsContainer /></div>
        </div>
        <div className="row">
          <div className="col-md-7"><Navigation /></div>
          <div className="col-md-4 pull-right"><SearchContainer /></div>
        </div>
      </div>
    </header>
  );
}

export default Header;