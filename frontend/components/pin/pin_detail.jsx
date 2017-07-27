import React from 'react';
import { Link } from 'react-router-dom';
import { values, merge } from 'lodash';
import PropTypes from 'prop-types';
import Dropdown from 'react-simple-dropdown';
// const DropdownTrigger = Dropdown.DropdownTrigger;
// const DropdownContent = Dropdown.DropdownContent;

class PinDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pin_id: 0,
      board_id: 0
    }

    this.handlePinning = this.handlePinning.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
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

  handleUnpinning() {
    let pinId = parseInt(this.props.pin.id);
    let boardId = parseInt(this.props.match.params.boardId);
    let pinning = {pinning: {pin_id: pinId, board_id: boardId}};
    this.props.deletePinning(pinning);
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
    const pinning = Object.assign({}, this.state);
    this.props.createPinning({pinning})
  }

  render() {
    let { pin, deletePin, currentUser, board, user } = this.props;
    if (pin == undefined) {
      pin = {};
    }

    return (
      <section className='pin-detail-container'>
        <div >
          <form className="pinning-dropdown-container" onSubmit={this.handlePinning}>
            <select className="pin-board-select"
              onChange={this.handleSelection}>
              <option key="disabled">Choose board</option>
              {
                values(user.boards).map((board) => {
                  if (values(pin.pinned_boards).includes(board.id)) {return;}
                  return(
                    <option className="pin-board-option"
                      key={board.id}
                      value={board.id}>{board.title}
                    </option>
                  );
                })
              }
            </select>
            <button type="Submit" className="pin-button">
              <i className="fa fa-lightbulb-o fa-2x"></i> Pin!
            </button>
          </form>
        </div>
        <div className='pin-info-container'>


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
