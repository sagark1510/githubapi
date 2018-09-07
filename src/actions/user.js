import * as types from './types';

export const fetchCurrentUser = () => {
  return {
    type: types.FETCH_USER_START,
  };
};

export const searchUser = params => {
  return {
    type: types.SEARCH_USER_START,
    params,
  };
};
