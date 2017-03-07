const alphaList = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_ALPHALIST':
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
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
