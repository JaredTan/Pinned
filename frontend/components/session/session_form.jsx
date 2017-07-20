import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.swapFormType = this.swapFormType.bind(this);
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
    this.props.history.push(newUrl);
  }

  render() {
    const { formType, demoLogin } = this.props;
    const words = (formType === 'login') ? 'Log In' : 'Sign Up!';
    const oppWords = (formType === 'login') ? 'Sign Up' : 'Log In';
    const demoUser = {user: {username:"DemoUser", password:"pinneddemo"}};
    return (


      <div className="login-form-container">
        <button className="top-corner-button" onClick={this.swapFormType}>{oppWords}</button>
        <form onSubmit={this.handleSubmit} className="login-form">
          <span className='top-message'>
            <h5>Welcome to </h5> <h3>pinned.</h3>
           </span>
          <br/>
          <h4 className="main-message">{words}</h4>
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
        <button className="demo" onClick={() => demoLogin(demoUser)}>Demo</button>
      </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
