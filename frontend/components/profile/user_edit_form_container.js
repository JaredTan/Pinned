import { connect } from 'react-redux';
import { updateUser, receiveUserErrors } from '../../actions/user_actions';
import UserEditForm from './user_edit_form';
import { withRouter } from 'react-router'

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.user,
    currentUser: state.session.currentUser,
    user: state.user,
    ownProps
  }
}

const mapDispatchToProps = dispatch => ({
  updateUser: (user, id) => dispatch(updateUser(user, id)),
  receiveUserErrors: (errors) => dispatch(receiveUserErrors(errors))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserEditForm));
