import React from 'react';
import FAQHeader from '../../components/faqHeader'

export default class FAQ extends React.Component {
  render() {
    return (
        <div className="container">
            <FAQHeader />
            {this.props.children}
        </div>
    );
  }
}