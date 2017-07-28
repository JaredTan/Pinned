import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router';
import SearchBar from './search_bar';
import { requestSearchResults, resetSearchResults } from '../../actions/search_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    searchResults: state.searchResults
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    requestSearchResults: (query) => dispatch(requestSearchResults(query)),
    resetSearchResults: () => dispatch(resetSearchResults())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
