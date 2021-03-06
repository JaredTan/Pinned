export const fetchAllBoards = (userId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/boards',
    data: {board: {user_id: userId}}
  });
};

export const fetchSingleBoard = id => {
  return $.ajax({
    method: 'GET',
    url: `api/boards/${id}`
  });
};

export const createBoard = board => {
  return $.ajax({
    method: 'POST',
    url: 'api/boards',
    data: board
  });
};

export const updateBoard = (board, id) => {
  return $.ajax({
    method: 'PUT',
    url: `api/boards/${id}`,
    data: board
  });
};

export const deleteBoard = board => {
  return $.ajax({
    method: 'DELETE',
    url: `api/boards/${board.id}`
  })
}
