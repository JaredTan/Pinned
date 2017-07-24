import React from 'react';
import { Link } from 'react-router-dom';
import PinCreateModal from '../modal/pin_create_modal';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // this.redirectToCreate = this.redirectToCreate.bind(this);
  }

  // redirectToCreate(event) {
  //   event.preventDefault();
  //   this.props.history.push('/pins/create');
  // }

  render() {
    let {currentUser, logout} = this.props;
    return(
        <nav className="nav-bar">
          <div className="left-nav">
            <Link className="nav-logo-container" to="/">
              <h1 className="nav-logo">p</h1>
            </Link>
          </div>
          <div className="search">
            <h2 className="search-text">
              hi {currentUser.username}, click on the pins!
            </h2>
          </div>
          <div className="right">
            <PinCreateModal/>
            <Link to={`/users/${currentUser.id}`}>
            Profile
            </Link>
            <button onClick={logout}>Logout</button>
          </div>
        </nav>
    );
  }
}

export default NavBar;
