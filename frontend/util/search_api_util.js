export const fetchSearchResults = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/searches',
    data: {query}
  });
};
