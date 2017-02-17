import React from 'react';
import { Link } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './faqHeader.scss'

counterpart.registerTranslations('en', require('./translations/en'));

const FAQHeader = () => {
  return (
    <nav>
      <div className="faqHeader">
        <Link to="/faq/rules" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.racingRules"/></Link>
        <Link to="/faq" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.faq"/></Link>
        <Link to="/faq/commandlist" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.racebotCommands"/></Link>
        <Link to="/faq/glossary" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.glossary"/></Link>
      </div>
    </nav>
  );
}

export default FAQHeader;