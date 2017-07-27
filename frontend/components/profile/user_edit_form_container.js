import { connect } from 'react-redux';
import { updateUser } from '../../actions/user_actions';
import UserEditForm from './user_edit_form';
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.user.errors,
    currentUser: state.session.currentUser,
    user: state.user,
    ownProps
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (user, id) => dispatch(updateUser(user, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEditForm));
