export const createFollowing = following => {
  return $.ajax({
    method: 'POST',
    url: 'api/followings',
    data: following
  });
};

export const deleteFollowing = following => {
  return $.ajax({
    method: 'DELETE',
    url: `api/followings/${following.id}`,
  })
}
