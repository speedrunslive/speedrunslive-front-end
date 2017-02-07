import React from 'react';
import { Link } from 'react-router';
import Navigation from '../navigation'

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header>
          <div className="container">
              <div className="row">
                  <div className="col-md-8">
                      <div className="row">
                          <Link to="/" className="srlLogo" />
                      </div>
                      <div className="row">
                          <Navigation />
                      </div>
                  </div>
              </div>
          </div>
      </header>
    );
  }
}