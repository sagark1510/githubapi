import * as types from './types';

export const fetchCurrentUser = () => {
  return {
    type: types.FETCH_USER_START,
  };
};
