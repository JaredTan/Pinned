export const createFollowing = following => {
  return $.ajax({
    method: 'POST',
    url: 'api/followings',
    data: following
  });
};

export const removeFollowing = following => {
  return $.ajax({
    method: 'DELETE',
    url: `api/followings/0`,
    data: following
  })
}
