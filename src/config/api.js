import axios from 'axios';

export default (Api = axios.create({baseURL: 'https://api.github.com/'}));

export const urls = {
  me: 'user',
  search: 'search/users',
};
