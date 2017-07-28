import React from 'react';
import { Link } from 'react-router-dom';
import PinCreateModal from '../modal/pin_create_modal';
import SearchBarContainer from './search_bar_container';


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
          <div className="search">
            <SearchBarContainer/>
          </div>
          <div className="right">
            <PinCreateModal/>
            <Link to={`/users/${currentUser.id}`}>
            Profile
            </Link>
            <button onClick={logout}>Logout</button>
          </div>
          <div className='filler-space'></div>
        </nav>
    );
  }
}

export default NavBar;
