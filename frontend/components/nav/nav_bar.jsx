import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {currentUser, logout} = this.props;
    return(
        <nav className="nav-bar">
          <div className="left-nav">
            <Link className="nav-logo-container" to="/">
              <h1 className="nav-logo">p</h1>
            </Link>
          </div>
          <div className="mid-nav">
            <h2 className="nav-greeting">
              hi {currentUser.username}, what will you pin today?
            </h2>
          </div>
          <div className="right-nav">
            <button>Profile</button>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
    );
  }
}

export default NavBar;
