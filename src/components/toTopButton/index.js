import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './toTopButton.scss'

counterpart.registerTranslations('en', require('./translations/en'));

const scrollToTop = () =>{
    window.scroll(0, 0);
}

const ToTopButton = () => {
  return (
      <a className="btn red-hover pull-right toTop" onClick={scrollToTop}><span><Translate content="toTopButton.backToTop"/></span></a>
  );
}

export default ToTopButton;