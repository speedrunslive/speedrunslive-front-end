const gameList = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_GAMELIST':
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.games
        });
    default:
      return state
  }
}

export default gameList
