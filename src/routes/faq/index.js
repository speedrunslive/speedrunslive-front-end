import React from 'react';
import FAQHeader from '../../components/faqHeader'
import FAQBody from '../../components/faq'

export default class FAQ extends React.Component {
  render() {
    return (
        <div className="container">
            <FAQHeader />
            <FAQBody />
            {this.props.children}
        </div>
    );
  }
}