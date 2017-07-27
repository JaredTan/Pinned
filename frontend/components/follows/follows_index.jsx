import React from 'react';
import {selectFollowingUsers} from '../../reducers/selectors';
import Masonry from 'react-masonry-component';
import { Link, Redirect } from 'react-router-dom';
import { values } from 'lodash';
import UserEditModal from '../modal/user_edit_modal';

class FollowsIndex extends React.Component {
  constructor (props) {
    super(props);


    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  followOrUnfollow(currentUser, user) {
    return user.followed ?
      <button className='profile-follow-button' onClick={this.handleUnfollow}>Unfollow</button> :
      <button className='profile-follow-button' onClick={this.handleFollow}>Follow</button>
  }

  handleFollow() {
    let {user, currentUser, createFollowing} = this.props;
    let following = {
      follower_id: currentUser.id,
      followee_id: user.id
     }
     createFollowing({following});
  }


  handleUnfollow() {
    let {user, currentUser, removeFollowing} = this.props;
    let following = {
      follower_id: currentUser.id,
      followee_id: user.id
     }
     removeFollowing({following});
  }

  userEditModal () {
    return (this.props.currentUser.id == this.props.match.params.userId) ? <UserEditModal/> : null
  }


  followingAndFollowers() {
    let {user} = this.props;
    return(
      <div className='follows-container'>
        <Link className='follow-link' to={`/users/${user.id}/following`}>Following</Link>
        <Link className='follow-link' to={`/users/${user.id}/followers`}>Followers</Link>
      </div>
    )
  }

  render() {
    let { currentUser, user, followers, followees } = this.props;
    let sortedUsers = this.props.match.path == '/users/:userId/followers' ?
    _.sortBy( followers, 'username' ) :
    _.sortBy( followees, 'username' ) ;

    let displayWords = this.props.match.path == '/users/:userId/followers' ?
    'Followers' :
    'Following' ;

    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };

    return (
      <div className='follows-index-container'>
          <div className="user-following-profile-top">
            <div className="user-profile-info-container">
              <h1 className="user-profile-username">{user.username}</h1>
                { currentUser.id == user.id ? null : this.followOrUnfollow(currentUser, user) }
              <p className="user-profile-description">{user.description}</p>
            </div>
            <div className="user-profile-pic-and-edit">
              <img className="user-profile-pic" src={user.image_url}></img>
              {this.userEditModal()}
            </div>
          </div>


          <h3 className='following-label'>{displayWords}</h3>



        <Masonry className={"follows-index"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          { sortedUsers.map( (user) => {
            return (
              <Link className ='user-profile-following-pic-and-follow' to={`/users/${user.id}`}>
                <img className="user-following-profile-pic-thumbnail" src={user.image_url}></img>
                {user.username}
              </Link>
            )
          }
        )}
          </Masonry>
      </div>
    )
  }

}

export default FollowsIndex;
