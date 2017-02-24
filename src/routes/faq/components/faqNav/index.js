import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './faqNav.scss'

//counterpart.registerTranslations('en', require('./translations/en'));

const FAQNav = (props) => {
  return (

    <div className="pull-right-sm col-md-3 faqNav">
        <h1>Navigation</h1>
        {props.children}
    </div>
  );
}

export default FAQNav;