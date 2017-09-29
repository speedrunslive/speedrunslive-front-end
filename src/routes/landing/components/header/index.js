import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation';
import DonationsContainer from '../../containers/donations';

import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/"><div className="srl-logo col-md-4"></div></Link>
        <DonationsContainer />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;