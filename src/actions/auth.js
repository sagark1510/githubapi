import * as types from './types';

export const authorize = payload => {
  return {
    type: types.AUTHENTICATION_SUCCESS,
    payload,
  };
};
export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};
