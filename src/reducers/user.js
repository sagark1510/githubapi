import * as types from '../actions/types';

const INITAL_STATE = {
  user: null,
  fetching: true,
  searchUsers: [],
  term: null,
};

export default (state = INITAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    case types.FETCH_USER_START:
      return {...state, fetching: true};
    case types.FETCH_USER_SUCCESS:
      return {...state, user: action.user, fetching: false};
    case types.SEARCH_USER_START:
      return {...state, term: action.params.q};
    case types.SEARCH_USER_SUCCESS:
      return {...state, searchUsers: action.list};
    default:
      return state;
  }
};
