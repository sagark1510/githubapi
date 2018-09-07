export const fetchUser = async () => {
  const response = await Api.get(urls.user);
  return response.data;
};
