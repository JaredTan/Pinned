import { connect } from 'react-redux';
import {createFollowing, removeFollowing} from '../../actions/following_actions';
import {requestSingleUser, requestAllUsers} from '../../actions/user_actions';
import { selectAllUsers } from '../../reducers/selectors';
import {withRouter} from 'react-router-dom'
import FollowsIndex from './follows_index';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    user: state.users.chosenUser,
    users: selectAllUsers(state.users)
  }
};

const mapDispatchToProps = dispatch => ({
  createFollowing: following => dispatch(createFollowing(following)),
  removeFollowing: following => dispatch(removeFollowing(following)),
  requestAllUsers: () => dispatch(requestAllUsers()),
  requestSingleUser: user => dispatch(requestSingleUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowsIndex));
