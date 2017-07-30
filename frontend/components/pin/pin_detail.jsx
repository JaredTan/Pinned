import React from 'react';
import { Link } from 'react-router-dom';
import { values, merge } from 'lodash';
import PropTypes from 'prop-types';
import Dropdown from 'react-simple-dropdown';
import BoardCreateModal from '../modal/board_create_modal';
// const DropdownTrigger = Dropdown.DropdownTrigger;
// const DropdownContent = Dropdown.DropdownContent;

class PinDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTab: false
    }

    this.handlePinning = this.handlePinning.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleCheckUnpinning = this.handleCheckUnpinning.bind(this);
    this.toggleBoards = this.toggleBoards.bind(this);
  }

  componentWillMount() {
    this.props.requestSinglePin(this.props.id);
    this.props.requestSingleUser(this.props.currentUser.id);
  }

  componentWillUnmount() {
    this.props.resetPin();
  }

  handleDelete(pin) {
    this.props.deletePin(pin);
    this.props.requestSingleUser(this.props.user.id);
  }

  toggleBoards() {
    this.setState({boardTab: !this.state.boardTab})
  }

  handleUnpinning() {
    let pinId = parseInt(this.props.pin.id);
    let boardId = parseInt(this.props.match.params.boardId);
    let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
    this.props.deletePinningInBoard(pinning);
  }

  handleCheckUnpinning(e) {
    e.preventDefault();
    let pinId = parseInt(this.props.pin.id);
    let boardId = parseInt(e.currentTarget.value);
    let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
    this.props.match.params.boardId == boardId ?
    this.props.deletePinningInPinSameBoard(pinning) :
    this.props.deletePinningInPinDiffBoard(pinning);
  }

  handleSelection(e) {
    e.preventDefault();
    this.setState({
      pin_id: this.props.pin.id,
      board_id: parseInt(e.currentTarget.value)
    });
  }

  handlePinning(e) {
    e.preventDefault();
    let pinId = parseInt(this.props.pin.id);
    let boardId = parseInt(e.currentTarget.value);
    let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
    this.props.createPinning(pinning);
  }

  createNewBoardModal(){
    return (
      <section className="pin-button-create-board">

            <BoardCreateModal small={true} pin={this.props.pin}/>

      </section>
    )
  }

  boards() {
    let { pin, deletePin, currentUser, board, user } = this.props;

    return (
      values(user.boards).map((board) => {
        if (values(pin.pinned_boards).includes(board.id)) {
        return (
          <button className="pin-button"
            onClick={this.handleCheckUnpinning}
            value={board.id}>{board.title}  ✔
          </button>
        )} else {
        return(
          <button className="pin-button"
            key={board.id}
            onClick={this.handlePinning}
            value={board.id}>{board.title}
          </button>
        );
        }
      })

    )



  }

  render() {
    let { pin, deletePin, currentUser, board, user } = this.props;
    if (pin == undefined) {
      pin = {};
    }


    return (
      <section className='pin-detail-container'>


        <div className='pin-info-container'>
          <div className="pin-board-div"
            onChange={this.handleSelection}>
            <button className='board-text' onClick={this.toggleBoards}>Pin to Boards!</button>

              {this.state.boardTab ? this.boards() : null}
              {this.state.boardTab ? this.createNewBoardModal() : null}
        </div>

          { (currentUser.id === pin.user_id) && (this.props.match.params.boardId == undefined) ?
            <button onClick={() => this.handleDelete(pin)} className='delete-button'>
              <i className="fa fa-times"></i> Delete Pin
              </button>
            : null
          }

          { (this.props.match.params.boardId) && (currentUser.id === board.user_id)?
            <button onClick={() => this.handleUnpinning()} className='delete-button'>
              <i className="fa fa-times"></i> Unpin from Board: {board.title}
              </button>
            : null
          }



          <br/>
            <h4>{pin.title}</h4>
          <h5>Pin by:
            <Link className = 'user-link' to={`/users/${pin.user_id}`}>{pin.owner_username}</Link>
          </h5>
      </div>
        <div className='pin-detail-image-container'>
        {pin.description}
          <a href={pin.url}>
            <img className='pin-detail-image' src={pin.image_url} alt={pin.title}></img>
          </a>
        </div>
      </section>
    );
  }
}

export default PinDetail;
