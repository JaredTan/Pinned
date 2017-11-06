import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.swapFormType = this.swapFormType.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillReceiveProps( {loggedIn} ) {
    if (loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm({user});
    this.setState({username: '', password: ''});
  }

  swapFormType() {
    const newUrl = (this.props.formType === 'login') ? `/signup` : `/login`;
    this.props.removeErrors();
    this.props.history.push(newUrl);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    const user = {username: 'DemoUser', password: 'pinneddemo'};
    this.props.demoLogin({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, demoLogin } = this.props;
    const words = (formType === 'login') ? 'Log In' : 'Sign Up!';
    const oppWords = (formType === 'login') ? 'Sign Up' : 'Log In';
    return (
      <div className="login-form-container">
        <button className="top-corner-button" onClick={this.swapFormType}>{oppWords}</button>
        <form onSubmit={this.handleSubmit} className="login-form">
          <span className='top-message'>
            <h1>pinned.</h1>
           </span>
          <br/>
          <h4 className="main-message">{words}</h4>
          <span className="session-errors">{this.renderErrors()}</span>
          <div>
            <label>
              <span>Username</span>
              <br/>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <span className='password-label'>Password</span>
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input className="submit-form-button"type="submit" value={`${words}`} />
          </div>
          <button className="demo" onClick={this.handleDemoLogin}>Demo</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
