import {connect} from 'react-redux';
import UserProfile from './user_profile';
import {selectSingleUser} from '../../reducers/selectors';
import {requestSingleUser, resetUser} from '../../actions/user_actions';
import {createFollowing, removeFollowing} from '../../actions/following_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => dispatch(requestSingleUser(id)),
  createFollowing: following => dispatch(createFollowing(following)),
  removeFollowing: following => dispatch(removeFollowing(following)),
  resetUser: () => dispatch(resetUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
