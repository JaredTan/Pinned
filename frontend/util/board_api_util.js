export const fetchAllBoards = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/boards'
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
