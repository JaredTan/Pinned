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
    this.swap = this.swap.bind(this);
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
  }

  swap() {
    const newUrl = (this.props.formType === 'login') ? `/signup` : `/login`;
    console.log(newUrl);
    this.props.history.push(newUrl);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error ${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }


  render() {
    const { formType, demoLogin } = this.props;
    const words = (formType === 'login') ? 'Log In' : 'Sign Up';
    const oppWords = (formType === 'login') ? 'Sign Up' : 'Log In';
    const demoUser = {user: {username:"albert", password:"einstein"}};
    return (


      <div className="login-form-square">
        <button className="top-corner-button" onClick={this.swap}>{oppWords}</button>
        <form onSubmit={this.handleSubmit} className="login-form-submit">
          <h5>Your ideas, pinned.</h5>
          <br/>
          <h3 className="please">{words}</h3>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
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
        </form>
        <button className="demo" onClick={() => demoLogin(demoUser)}>Demo</button>
      </div>
    );
  }
}

export default withRouter(SessionForm);
