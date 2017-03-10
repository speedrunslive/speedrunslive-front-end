import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation';
import DonationsContainer from '../../containers/donations';

import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="srlLogo col-md-4" />
        <DonationsContainer />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;