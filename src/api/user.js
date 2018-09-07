import Api, {urls} from '../config/api';

export const fetchCurrentUser = async () => {
  const response = await Api.get(urls.me);
  return response.data;
};

export const searchUser = async params => {
  const response = await Api.get(urls.search, {params});
  return response.data;
};

export const fetchSingleUser = async url => {
  const response = await Api.get(url);
  return response.data;
};
