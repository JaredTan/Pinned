import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserEditModal from '../modal/user_edit_modal';
import Masonry from 'react-masonry-component';
import BoardIndexContainer from '../board/boards_index_container';
import { createPinArray } from '../../reducers/selectors';
import PinDetailModal from '../modal/pin_detail_modal';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     pinTab: false,
     boardTab: true,
   }
  }


  componentDidMount () {
    this.props.requestSingleUser(this.props.match.params.userId);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.requestSingleUser(nextProps.match.params.userId);
    }
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
    console.log(this.props.boards,'boards in user_profile');
    return(
      <div>
        <BoardIndexContainer
          boards={this.props.user.boards}
          owner={this.props.user}
          />
      </div>
    )
  }

  userEditModal () {
    return (this.props.currentUser.id == this.props.match.params.userId) ? <UserEditModal/> : null
  }


  render() {
      let { user } = this.props;
      let image_url = user.image_url
      if (image_url == '') {
        image_url = "http://res.cloudinary.com/jaredtan/image/upload/v1500969184/display_pic_nwmrpn.png"
      }
      return (
        <section className="user-profile-container">
          <div className="user-profile-top">
            <div className="user-profile-info-container">
              <h1 className="user-profile-username">{user.username}</h1>
              <p className="user-profile-description">{user.description}</p>
            </div>
            <div className="user-profile-pic-and-edit">
              <img className="user-profile-pic" src={image_url} alt="Profile Picture"></img>
              {this.userEditModal()}
            </div>
          </div>

          <div className="tab-buttons-bar-container">
              <button className="tab-button" onClick={() => this.handleTabClick("board")}>Boards</button>
              <button className="tab-button" onClick={() => this.handleTabClick("pin")}>Pins</button>
            </div>


          {this.state.boardTab ? this.userBoards() : null}
          {this.state.pinTab ? this.userPinnedPins() : null }


        </section>
      );
    }



}

export default UserProfile;
