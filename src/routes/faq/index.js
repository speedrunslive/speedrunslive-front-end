import React from 'react';
import FAQHeader from '../../components/faqHeader'
import FAQBody from '../../components/faq'
import Rules from '../../components/rules'
import CommandList from '../../components/commandList'
import Glossary from '../../components/glossary'

const FAQ = (props) => {

var pageContents;
var currentPage = props.location.pathname;

if (currentPage === '/faq'){
  pageContents = <FAQBody />;
}
else if (currentPage === '/faq/rules'){
  pageContents = <Rules />;
}
else if (currentPage === '/faq/glossary'){
  pageContents = <Glossary />;
}
else if (currentPage === '/faq/commandlist'){
  pageContents = <CommandList />;
}

  return (
    <div className="container">
      <FAQHeader />
      {pageContents}
    </div>
  );
}

export default FAQ;