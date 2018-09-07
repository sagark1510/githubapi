import Api, {urls} from '../config/api';

export const fetchCurrentUser = async () => {
  const response = await Api.get(urls.me);
  return response.data;
};
