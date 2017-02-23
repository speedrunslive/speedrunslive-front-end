import React from 'react';
import { Link, IndexLink } from 'react-router';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';
import './faqHeader.scss'

counterpart.registerTranslations('en', require('./translations/en'));

const FAQHeader = () => {
  return (
    <nav>
      <div className="faqHeader">
        <Link to="/faq/rules" activeClassName="active-green" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.racingRules"/></Link>
        <IndexLink to="/faq" activeClassName="active-green" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.faq"/></IndexLink>
        <Link to="/faq/commandlist" activeClassName="active-green" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.racebotCommands"/></Link>
        <Link to="/faq/glossary" activeClassName="active-green" className="btn btn-large btn-green green-hover"><Translate content="faqHeader.glossary"/></Link>
      </div>
    </nav>
  );
}

export default FAQHeader;