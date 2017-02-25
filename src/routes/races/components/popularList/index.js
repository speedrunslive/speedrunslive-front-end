import React, { PropTypes } from 'react';
//import './popularList.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import PopularGame from '../popularGame';

counterpart.registerTranslations('en', require('./translations/en'));

const PopularList = (props) => {
  return (
    <div className="popularList">
      <h1><Translate content="popularList.heading"/></h1>
      <ul>
      {props.games.map((game, i) =>
        <PopularGame name={game.name} rank={i+1} short={game.short} key={i} />
      )}
      </ul>
    </div>
  );
}

PopularList.propTypes = {
    games: PropTypes.array.isRequired
};

export default PopularList;