const alphaList = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_ALPHALIST':
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.games
        });
    default:
      return state
  }
}

export default alphaList
