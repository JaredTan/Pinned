import React from 'react';
import { Link, NavLink } from 'react-router-dom';
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


   this.handleFollow = this.handleFollow.bind(this);
   this.handleUnfollow = this.handleUnfollow.bind(this);
  }


  componentWillMount () {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
  }

  componentWillUnmount() {
      this.props.resetUser();
  }

  resetTabs(){
    this.setState({
      pinTab: false,
      boardTab: false
    })
  }

  handleTabClick(tab){
    this.resetTabs();
    switch (tab) {
      case "pin":
        this.setState({ pinTab: true });
        break;
      case "board":
        this.setState({ boardTab: true });
        break;
    }
  }

  userPinnedPins(){
    const pinArr = createPinArray(this.props.pinned_pins)
    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };
    return(
      <Masonry className={"pins-index"}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        >
        { pinArr.map( (pin) => {
          return (
            <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>);
          }
        )}
      </Masonry>
    )
  }

  userBoards(){
    return(
      <div>
        <UserBoardsContainer
          boards={this.props.user.boards}
          owner={this.props.user}
          />
      </div>
    )
  }

  followCount(follows) {
    if (follows == undefined) {
      follows = []
    }
    return (follows.length);
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
    let {user, currentUser, removeFollowing, requestSingleUser} = this.props;
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
        {this.followCount(values(user.followees))}
        <Link className='follow-link' to={`/users/${user.id}/following`}>Following</Link>
        {this.followCount(values(user.followers))}
        <Link className='follow-link' to={`/users/${user.id}/followers`}>Followers</Link>
      </div>
    )
  }

  followOrUnfollow(currentUser, user) {
    return (values(user.followers)).includes(currentUser.id) ?
      <button className='profile-follow-button' onClick={this.handleUnfollow}>Unfollow</button> :
      <button className='profile-follow-button' onClick={this.handleFollow}>Follow</button>
  }

  userEditModal () {
    return (this.props.currentUser.id == this.props.match.params.userId) ? <UserEditModal/> : null
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
        <section className="user-profile-container">
          <div className="user-profile-top">
            <div className="user-profile-info-container">
              <h1 className="user-profile-username">{user.username}</h1>
                { currentUser.id == user.id ? null : this.followOrUnfollow(currentUser, user) }
              <p className="user-profile-description">{user.description}</p>
            </div>
            <div className="user-profile-pic-and-edit">
              <img className="user-profile-pic" src={image_url}></img>
              {this.userEditModal()}
            </div>
            {this.followingAndFollowers()}
          </div>

          <div className="tab-buttons-bar-container">
              <button className="tab-button" onClick={() => this.handleTabClick("board")}>Boards</button>
              <button className="tab-button" onClick={() => this.handleTabClick("pin")}>Pins</button>
            </div>


          {this.state.boardTab ? this.userBoards() : null}


        </section>
      );
    }



}
// {this.state.pinTab ? this.userPinnedPins() : null }

export default UserProfile;
