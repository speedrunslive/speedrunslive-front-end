import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation';

import './header.scss';

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/" className="srlLogo" />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;