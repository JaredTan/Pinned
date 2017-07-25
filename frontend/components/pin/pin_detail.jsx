import React from 'react';
import { Link } from 'react-router-dom';
import { values } from 'lodash';
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
  }

  componentWillUnmount() {
    this.props.resetPin();
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
    this.props.closeModal();
  }

  render() {
    let { pin, deletePin, currentUser } = this.props;
    if (pin == undefined) {
      pin = {};
    }
    return (
      <section className='pin-detail-container'>
        <div className='pin-info-container'>
            <div className="pinning-dropdown-container">
              <form onSubmit={this.handlePinning}>
                <select className="pin-show-board-select"
                  onChange={this.handleSelection}>
                  <option key="disabled">Choose board</option>
                  {
                    values(currentUser.boards).map((board) => {
                      if (values(pin.pinned_boards).includes(board.id)) {return;}
                      return(
                        <option className="pin-show-option"
                          key={board.id}
                          value={board.id}>{board.title}
                        </option>
                      );
                    })
                  }
                </select>
                <button type="Submit" className="fa fa-star pin-button">Pin</button>
              </form>
            </div>


          { currentUser.id === pin.user_id ?
            <button onClick={() => deletePin(pin)} className='delete-button'>
              <i className="fa fa-times"></i> Delete
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
