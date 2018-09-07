import Api from '../config/api';

const setAuthToken = token => {
  if (token) {
    // apply to every request
    Api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Delete the auth header
    delete Api.defaults.headers.common.Authorization;
  }
};

export default setAuthToken;
