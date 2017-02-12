import React from 'react';
import Header from '../header';
import Footer from '../footer';

import './layout.scss';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}