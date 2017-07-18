import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, signup, logout } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  console.log(formType);
  console.log(formType === 'login');
  const processForm = (formType === 'login') ? login : signup;
  console.log(processForm);
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)
