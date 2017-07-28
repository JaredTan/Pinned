import * as APIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RESET_SEARCH_RESULTS = "RESET_SEARCH_RESULTS";

export const receiveSearchResults = searchResults =>  {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    searchResults
  }
};

export const resetSearchResults = () => {
  return {
    type: RESET_SEARCH_RESULTS
  }
}

export const requestSearchResults = query => dispatch => {
  return APIUtil.fetchSearchResults(query).then(
    searchResults => dispatch(receiveSearchResults(searchResults))
  )
}
