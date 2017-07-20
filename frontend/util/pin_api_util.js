export const fetchAllPins = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/pins'
  });
};

export const fetchSinglePin = id => {
  return $.ajax({
    method: 'GET',
    url: `api/pins/${id}`
  });
};

export const createPin = pin => {
  return $.ajax({
    method: 'POST',
    url: 'api/pins',
    data: { pin }
  });
};
