export const fetchAllImages () => {
  return $.ajax({
    method: 'GET',
    url: 'api/images',
    data: (images) => {
      this.setState({images:images}.bind(this))
    }
  })
}
