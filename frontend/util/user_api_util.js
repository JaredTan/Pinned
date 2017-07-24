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

export const updateUser = (user, id) => {
  return $.ajax({
    method: 'PUT',
    url: `api/users/${id}`,
    data: user
  });
};
