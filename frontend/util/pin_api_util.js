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
    data: pin
  });
};

export const updatePin = (pin, id) => {
  return $.ajax({
    method: 'PUT',
    url: `api/pins/${id}`,
    data: pin
  });
};

export const removePin = (pin) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/pins/${pin.id}`,
  })
}
