import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout } = this.props;

    if (currentUser) {
      return (

        <div className="welcome">
          <Link className="logo" to='/'>
            <span>
              <i className="pinned-logo"></i>
            </span>
          </Link>
          <h1> Welcome {`${currentUser.username}`} </h1>
          <button onClick={()=>logout()}>Logout!</button>
        </div>
    )} else {
      return (
        <div className='will-log-in'>
          <Link to={`/signup`}><h2>Sign Up!</h2></Link>
          <Link to={`/login`}><h2>Log In!</h2></Link>
        </div>
      )}
    }

}


export default Greeting;
