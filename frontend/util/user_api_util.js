export const fetchAllUsers = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users'
  });
};

export const fetchSingleUser = id => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};
