import React from 'react';
import FAQHeader from './components/faqHeader'

const FAQ = (props) => {
  return (
    <div className="container">
      <FAQHeader />
      {props.children}
    </div>
  );
}

export default FAQ;