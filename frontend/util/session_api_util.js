export const signup = user => (
  $.ajax({
    method: "POST",
    url: '/api/users',
    data: user
  })
);

export const login = user => {
  console.log(user, 'user login ajax');
  return $.ajax({
    method: "POST",
    url: '/api/session',
    data: user
  })
};

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: '/api/session',
  })
);
