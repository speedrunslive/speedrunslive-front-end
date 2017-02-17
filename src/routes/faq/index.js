import React from 'react';
import FAQHeader from '../../components/faqHeader'
import FAQBody from '../../components/faq'

const FAQ = (props) => {
  return (
    <div className="container">
      <FAQHeader />
      <FAQBody />
      {props.children}
    </div>
  );
}

export default FAQ;