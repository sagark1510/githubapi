import * as types from '../actions/types';

const INITAL_STATE = {
  accessToken: null,
  user: null,
};

export default (state = INITAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    case types.AUTHENTICATION_SUCCESS:
      return {...state, ...action.payload};
    case types.LOGOUT:
      return INITAL_STATE;
    default:
      return state;
  }
};
