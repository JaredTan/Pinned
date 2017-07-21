import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, logout, removeErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    demoLogin: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
