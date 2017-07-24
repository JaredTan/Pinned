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

  _handleTabClick(name){
    this.resetTabs();
    switch (name) {
      case "pin":
        this.setState({ pinTab: true });
        break;
      case "board":
        this.setState({ boardTab: true });
        break;
    }
  }

  pinShow(){
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
        <BoardIndexContainer
          boards={this.props.user.boards}
          owner={this.state.user}
          />
      </div>
    )
  }

  userEditModal () {
    return (this.props.currentUser.id == this.props.match.params.userId) ? <UserEditModal/> : null
  }


  render() {
      let { user, boards } = this.props;
      console.log(user,'user');
      return (
        <section className="user-profile-container">
          <div className="user-profile-top">
            <div className="user-profile-info-container">
              <h1 className="user-profile-username">{user.username}</h1>
              <p className="user-profile-description">{user.description}</p>
            </div>
            <img className="user-profile-pic" src={user.image_url} alt="Profile Picture"></img>
            {this.userEditModal()}
          </div>
          <div className="user-profile-buttons-bar-container">
            <div className="user-profile-buttons-bar">
              <button className={this.state.boardTab ? "profile-tab-button-active" :"profile-tab-button-inactive"}
                onClick={() => this._handleTabClick("board")}>
                <div className="profile-button-text-container">
                  <div>
                    Boards
                  </div>
                  <div>

                  </div>
                </div>
              </button>
              <button className={this.state.pinTab ? "profile-tab-button-active" :"profile-tab-button-inactive"}
                onClick={() => this._handleTabClick("pin")}>
                <div className="profile-button-text-container">
                  <div>
                    Pins
                  </div>
                  <div>

                  </div>
                </div>
              </button>
            </div>
          </div>


          {this.state.boardTab ? this.userBoards() : null}
          {this.state.pinTab ? this.pinShow() : null }


        </section>
      );
    }



}
// <div className="user-profile-bottom">
//   <NavLink exact to={`/users/${user.id}`} className="user-profile-link">
//     {boards.length} Boards
//   </NavLink>
//   <NavLink to={`/users/${user.id}/pins`} className="user-profile-link">
//     {pins.length} Pins
//   </NavLink>
// </div>

export default UserProfile;
