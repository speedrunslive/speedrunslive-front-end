import React from 'react';

import './pagenator.scss';

const Pagenator = (props) => {
    // temp paging. Should be done with react router and buttons in future.
    let nextPage = parseInt(props.page) + 1;
    let prevPage = parseInt(props.page) - 1;
    prevPage = (prevPage < 1) ? 1 : prevPage;
    nextPage = (nextPage > props.lastPage) ? props.lastPage : nextPage;


    function renderBackButtons() {
      if (props.page == 1){
        return [
          <button key='first' disabled className="btn"><span className="first">&nbsp;</span></button>, 
          <button key='previous' disabled className="btn"><span className="previous">&nbsp;</span></button>
        ];
      } else {
        return [
          <a key='first' className="btn red-hover" href='1'><span className="first">&nbsp;</span></a>, 
          <a key='previous' className="btn red-hover" href={prevPage}><span className="previous">&nbsp;</span></a>
        ]
      }
    }

    function renderNextButtons() {
      if (props.lastPage == props.page) {
        return [
          <button key='next' disabled className="btn"><span className="next">&nbsp;</span></button>,
          <button key='last' disabled className="btn"><span className="last">&nbsp;</span></button>
        ];
      } else {
        return [
          <a key='next' className="btn red-hover" href={nextPage}><span className="next">&nbsp;</span></a>,
          <a key='last' className="btn red-hover" href={props.lastPage}><span className="last">&nbsp;</span></a>
        ];
      }
    }

    if (!props.lastPage || props.lastPage === 0 ) return null;

    return (
      <div className="pagenator">
        {renderBackButtons()}
        {renderNextButtons()}
      </div>
    );  
}

export default Pagenator;