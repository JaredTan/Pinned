import React from 'react';
import { Link } from 'react-router-dom';
import { values, merge } from 'lodash';
import PropTypes from 'prop-types';
import Dropdown from 'react-simple-dropdown';
import BoardCreateModal from '../modal/board_create_modal';

class PinDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      boardTab: false,
      deleteTab: false
    }

    this.handlePinning = this.handlePinning.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleCheckUnpinning = this.handleCheckUnpinning.bind(this);
    this.toggleBoards = this.toggleBoards.bind(this);
    this.toggleWarning = this.toggleWarning.bind(this);
  }

  componentWillMount() {
    this.props.requestSinglePin(this.props.id);
    this.props.match.params.userId ?
    this.props.requestSingleUser(this.props.match.params.userId) :
    this.props.requestSingleUser(this.props.currentUser.id)
    ;
  }

  componentWillUnmount() {
    this.props.resetPin();
  }

  handleDelete(pin) {
    this.props.deletePin(pin);
    this.props.requestSingleUser(this.props.user.id);
  }

  toggleWarning() {
    this.setState({deleteTab: !this.state.deleteTab})
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
      values(currentUser.boards).map((board, idx) => {
        if (values(pin.pinned_boards).includes(board.id)) {
        return (
          <button className="pin-button"
            onClick={this.handleCheckUnpinning}
            key={idx}
            value={board.id}>{board.title}  ✔
          </button>
        )} else {
        return(
          <button className="pin-button"
            key={idx}
            onClick={this.handlePinning}
            value={board.id}>{board.title}
          </button>
        );
        }
      })
    )
  }

  deleteButtons() {
    let { pin, deletePin } = this.props;
    return (
      <div className='delete-pin-yes-no-buttons'>
        <button className="delete-pin-button-yes"
          onClick={()=>this.handleDelete(pin)}
          value={pin.id}>Yes
        </button>
        <button className="delete-pin-button-no"
          onClick={this.toggleWarning}
          value={pin.id}>No
        </button>
      </div>
    );
  }

  render() {
    let { pin, deletePin, currentUser, board, user } = this.props;
    if (pin == undefined) {
      pin = {};
    }

    let warning = this.state.deleteTab ? "Are you sure?" :
    <div><i className="fa fa-times"></i>Delete Pin</div> ;
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
            <button onClick={() => this.toggleWarning()}  className='delete-button'>
              {warning}
              </button>
            : null
          }
          {this.state.deleteTab ? this.deleteButtons() : null}
          { (this.props.match.params.boardId) && (currentUser.id === board.user_id)?
            <button onClick={() => this.handleUnpinning()} className='delete-button'>
              <i className="fa fa-times"></i> Unpin from Board: {board.title}
              </button>
            : null
          }
          <br/>
            <h4 className='pin-title'>{pin.title}</h4>
          <div className='pin-by'>Pin by:
            <Link className = 'pin-by-link' to={`/users/${pin.user_id}`}>
              {pin.owner_username}
              <img className='pin-detail-user-image' src={pin.owner_image_url}></img>
            </Link>
          </div>
      </div>
        <div className='pin-detail-image-container'>
        {pin.description}
          <a href={pin.url}>
            <img className='pin-detail-image' src={pin.image_url}></img>
          </a>
        </div>
      </section>
    );
  }
}

export default PinDetail;
