import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import './landing.scss';

const Landing = (props) => {
  return (
    <div id="mainContent">
      <Header />
        <div className="wrap">
          {props.children}
        </div>
      <Footer />
    </div>
  );
}

export default Landing;