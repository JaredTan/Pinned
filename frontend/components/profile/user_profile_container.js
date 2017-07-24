import {connect} from 'react-redux';
import UserProfile from './user_profile';
// import {selectSingleUser} from '../../reducers/selectors';
import {requestSingleUser} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return {user: state.user}
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
