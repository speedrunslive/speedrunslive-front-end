const popularList = (state = {}, action) => {
  switch (action.type) {
    case 'REQUEST_POPULARLIST':
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        });
    case 'RECEIVE_POPULARLIST':
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.games
        });
    default:
      return state
  }
}

export default popularList
