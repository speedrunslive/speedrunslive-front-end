import React, {PropTypes} from 'react'; 

const RaceStats = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

RaceStats.propTypes = {
    children: PropTypes.node.isRequired,
};

export default RaceStats;