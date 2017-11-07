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
            <Link to="/">
              <h1 className="nav-logo">p</h1>
            </Link>
          </div>
          <div className="search">
            <SearchBarContainer/>
          </div>
          <div className="right-nav">
            <div className='right-nav-text'>
              <PinCreateModal/>
              <Link to={`/users/${currentUser.id}`}>
                Profile
              </Link>
            </div>
            <div className='logos'>
              <button className='fa fa-sign-out fa-2x' onClick={logout}></button>
              <a className='github'href="https://github.com/JaredTan/Pinned">
                <i className="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
