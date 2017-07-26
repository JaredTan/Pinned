import { connect } from 'react-redux';
import {createFollowing, removeFollowing} from '../../actions/following_actions';
import FollowsIndex from './follows_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    user: state.users.chosenUser
  }
};

const mapDispatchToProps = dispatch => ({
  createFollowing: following => dispatch(createFollowing(following)),
  removeFollowing: following => dispatch(removeFollowing(following))
});

export default connect(mapStateToProps, mapDispatchToProps)(PinsIndex);
