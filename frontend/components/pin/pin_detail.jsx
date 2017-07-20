import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class PinDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin_id: 0,
      board_id: 0
    };

    this.handleChooseBoard = this.handleChooseBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestSinglePin(this.props.id);
  }

  componentWillUnmount() {
    this.props.clearPin();
  }

  handleChooseBoard(e) {
    e.preventDefault();
    this.setState({
      pin_id: this.props.pinDetail.id,
      board_id: parseInt(e.currentTarget.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPinning(this.state);
    this.props.closeModal();
  }

  render() {
    let { pinDetail, currentBoards, pinned_boards } = this.props;
    return (
      <section className="pin-show-container">
        <div className="pinning-dropdown-container">
          <form onSubmit={this.handleSubmit}>
            <select className="pin-show-board-select"
              onChange={this.handleChooseBoard}>
              <option key="disabled">Choose board</option>
              {
                currentBoards.map((board) => {
                  if (pinned_boards.includes(board.id)) {return;}
                  return(
                    <option className="pin-show-option"
                      key={board.id}
                      value={board.id}>{board.title}
                    </option>
                  );
                })
              }
            </select>
            <button type="Submit" className="fa fa-thumb-tack board-show-pin">Pin</button>
          </form>
        </div>

        <div className="pin-show-header">
          <h2 className='pin-show-title'>{pinDetail.name}</h2>
          <Link to={`/users/${pinDetail.user_id}`} className="pin-show-user-info">
            <img className='pin-show-user-img' src={pinDetail.creator_image_url} alt="creator pic"></img>
            <figcaption className='pin-show-username'>Uploaded By: {pinDetail.creator_username}</figcaption>
          </Link>
        </div>

        <div className="pin-show-img-container">
          <img className="pin-show-img" src={pinDetail.image_url} alt={pinDetail.name}></img>
          <figcaption className='pin-show-description'>{pinDetail.description}</figcaption>
        </div>
      </section>
    );
  }
}

export default PinDetail;
