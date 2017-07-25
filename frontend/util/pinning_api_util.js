export const createPinning = pinning => {
  return $.ajax({
    method: 'POST',
    url: 'api/pinnings',
    data: pinning
  });
};

export const deletePinning = pinning => {
  return $.ajax({
    method: 'DELETE',
    url: `api/pinnings/${pinning.id}`,
  })
}
