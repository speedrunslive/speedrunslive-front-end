import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import './landing.scss';

export default class Landing extends React.Component {
  render() {
    return (
      <div id="mainContent">
        <Header />
          <div id="wrap">
            {this.props.children}
          </div>
        <Footer />
      </div>
    );
  }
}