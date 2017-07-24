import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserEditModal from '../modal/user_edit_modal';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount () {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  userEditModal () {
    return (this.props.currentUser.id == this.props.match.params.userId) ? <UserEditModal/> : null
  }



  render() {
      let { user } = this.props;
      return (
        <section className="user-profile-container">
          <div className="user-profile-top">
            <div className="user-profile-info-container">
              <h1 className="user-profile-username">{user.username}</h1>
              <p className="user-description">{user.description}</p>
            </div>
            <img className="user-profile-pic" src={user.image_url} alt="user-profile-pic"></img>
            {this.userEditModal()}
          </div>

          <div className="user-profile-bottom">
            <NavLink exact to={`/users/${user.id}`} className="user-profile-link">
          Boards
            </NavLink>
          </div>
        </section>
      );
    }



}

export default UserProfile;
