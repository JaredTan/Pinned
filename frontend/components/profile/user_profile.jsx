import React from 'react';
import { Link } from 'react-router-dom';
import UserEditModal from '../modal/user_edit_modal';
import Masonry from 'react-masonry-component';
import UserBoardsContainer from '../board/user_boards_container';
import { createPinArray } from '../../reducers/selectors';
import PinDetailModal from '../modal/pin_detail_modal';
import {values} from 'lodash';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     pinTab: false,
     boardTab: true
   }
  }

  componentWillMount() {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
      this.resetTabs();
      this.setState({ boardTab: true })
    }
  }

  componentWillUnmount() {
      this.props.resetUser();
  }

  resetTabs() {
    this.setState({
      pinTab: false,
      boardTab: false
    })
  }

  handleTabClick = (tab) => {
    this.resetTabs();
    return (tab === "pin") ?
    this.setState({ pinTab: true }) :
    this.setState({ boardTab: true })
  }

  userPinnedPins() {
    const pinArr = createPinArray(this.props.user.pinned_pins)
    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };
    return (
      <Masonry className={"user-pins"}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        >
        { pinArr.map( (pin) => {
          return (
            <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>
          )}
        )}
      </Masonry>
    );
  }

  userBoards() {
    return(
      <div>
        <UserBoardsContainer
          boards={this.props.user.boards}
          owner={this.props.user}
          />
      </div>
    )
  }

  handleFollow = () => {
    let {user, currentUser, createFollowing} = this.props;
    let following = {
      follower_id: currentUser.id,
      followee_id: user.id
    }
    createFollowing({following});
  }

  handleUnfollow = () => {
    let {user, currentUser, removeFollowing} = this.props;
    let following = {
      follower_id: currentUser.id,
      followee_id: user.id
    }
    removeFollowing({following});
  }

  followingAndFollowers() {
    let {user} = this.props;
    if (user == null) {
      user = {};
    }
    return(
      <div className='follows-container'>
        <a className='follow-count'>{this.followCount(values(user.followees))}</a>
        <Link className='follow-link' to={`/users/${user.id}/following`}>Following</Link>
        <a className='follow-count'>{this.followCount(values(user.followers))}</a>
        <Link className='follow-link' to={`/users/${user.id}/followers`}>Followers</Link>
      </div>
    )
  }

  followCount(follows) {
    if (follows == undefined) {
      follows = []
    }
    return (follows.length);
  }

  followOrUnfollow(currentUser, user) {
    return user.followed ?
      <button className='profile-follow-button' onClick={this.handleUnfollow}>Unfollow</button> :
      <button className='profile-follow-button' onClick={this.handleFollow}>Follow</button>
  }

  userEditModal() {
    return (this.props.currentUser.id == this.props.match.params.userId) ? <UserEditModal/> : null
  }

  profileDisplay() {
    return (
      <div className="user-profile-container">
        <div className="tab-buttons-bar-container">
          <button className={this.state.boardTab ? "tab-button-on" :"tab-button-off"}
             onClick={() => this.handleTabClick("board")}>Boards</button>
           <button className={this.state.pinTab ? "tab-button-on" :"tab-button-off"}
             onClick={() => this.handleTabClick("pin")}>Pins</button>
        </div>
      {this.state.boardTab ? this.userBoards() : null}
      {this.state.pinTab ? this.userPinnedPins() : null }
    </div>
    )
  }

  followDisplay() {
    let { followers, followees } = this.props;
    let sortedUsers = this.props.location.pathname.split('/').slice(-1)[0] === "followers" ?
    _.sortBy( followers, 'username' ) :
    _.sortBy( followees, 'username' );

    let displayWords = this.props.location.pathname.split('/').slice(-1)[0] === "followers" ?
    'Followers' :
    'Following' ;

    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };

    return (
      <div className="follows-index-container">
        <h3 className='following-label'>{displayWords}</h3>
        <Masonry className={"follows-index"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          { sortedUsers.map( (user, idx) => {
            return (
              <Link key={idx} className ='user-profile-following-pic-and-follow' to={`/users/${user.id}`}>
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

  render() {
    let { user, currentUser } = this.props;
    if (user == null) {
      user = {};
    }
    let image_url = user.image_url
    if (image_url == '') {
      image_url = "http://res.cloudinary.com/jaredtan/image/upload/v1500969184/display_pic_nwmrpn.png"
    }

    return (
      <section>
        <section className="user-profile-container">
          <div className="user-profile-top">
            <div className="user-profile-info-container">
              { currentUser.id == user.id ? null : this.followOrUnfollow(currentUser, user) }
              <h1 className="user-profile-username">{user.username}</h1>
              <p className="user-profile-description">{user.description}</p>
            </div>
            <div className="user-profile-pic-and-edit">
              <Link to={`/users/${user.id}`}>
                <img className="user-profile-pic" src={image_url}></img>
              </Link>
              {this.userEditModal()}
            </div>
            {this.followingAndFollowers()}
          </div>
        </section>
        <div>
          {
            this.props.location.pathname.split('/').slice(-1)[0] === "following" ||
            this.props.location.pathname.split('/').slice(-1)[0] === "followers" ?
            this.followDisplay() :
            this.profileDisplay()
          }
        </div>
      </section>
    );
  }
}

export default UserProfile;
