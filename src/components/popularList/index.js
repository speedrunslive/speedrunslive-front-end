import React, { PropTypes } from 'react';
import './popularList.scss';
import Translate from 'react-translate-component';
import counterpart from 'counterpart';

import PopularGame from '../popularGame';

counterpart.registerTranslations('en', require('./translations/en'));

export default class PopularList extends React.Component {
  render() {
    return (
      <div>
        <h1><Translate content="popularList.heading"/></h1>
        <div className="popularList">
            <ul>
            {this.props.games.map((game, i) =>
                <PopularGame name={game.name} rank={i+1} key={i} />
            )}
            </ul>
        </div>
      </div>
    );
  };
}

PopularList.propTypes = {
    games: PropTypes.array.isRequired
};