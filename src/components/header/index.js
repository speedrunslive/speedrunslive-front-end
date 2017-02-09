import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation'

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <Link to="/" className="srlLogo" />
          <Navigation />
        </div>
      </header>
    );
  }
}