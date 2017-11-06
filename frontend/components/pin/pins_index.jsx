import React from 'react';
import Masonry from 'react-masonry-component';
import PinDetailModal from '../modal/pin_detail_modal';
import { Link } from 'react-router-dom';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      deleteTab: false
    };

    this.toggleWarning = this.toggleWarning.bind(this);
  }

  componentWillMount() {
    const boardId = this.props.match.params.boardId;
    boardId == undefined ?
    this.props.requestAllPins() : this.props.requestSingleBoard(boardId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.boardId !== nextProps.match.params.boardId) {
      this.props.requestSingleBoard(nextProps.match.params.boardId);
    }
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  shufflePins(pins) {
    let i = 0;
    let j = 0;
    let temp = null;
    for (i = pins.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = pins[i];
      pins[i] = pins[j];
      pins[j] = temp;
    }
    return pins;
  }

  handleDelete(board) {
    const userId = board.user_id;
    const newRoute = `/users/${userId}`;
    this.props.deleteBoard(board);
    this.props.history.push(newRoute);
  }

  toggleWarning() {
    this.setState({deleteTab: !this.state.deleteTab})
  }

  deleteButtons() {
    let { board, deleteBoard } = this.props;
    return (
      <div className='delete-yes-no-buttons'>
        <button className="delete-button-yes"
          onClick={()=>this.handleDelete(board)}
          value={board.id}>Yes
        </button>
        <button className="delete-button-no"
          onClick={this.toggleWarning}
          value={board.id}>No
        </button>
      </div>
    );
  }

  render() {
    let { pins, board, currentUserId, deleteBoard } = this.props;
    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };
    const { loading } = this.state;

    const boardId = this.props.match.params.boardId;
    let pinsToDisplay = (boardId == undefined) ? pins : board.pins;
    let warning = this.state.deleteTab ? "Are you sure?" :
    <div><i className="fa fa-times"></i> Delete Board</div>;
    let reversedSortedPins = _.sortBy( pinsToDisplay, 'id' ).reverse();
    return (
      loading ?
        <div className="spinner"></div> :
        <div className='pin-index-container'>
          {  (boardId == undefined) ? null :
            <section className='board-detail-container'>
              { currentUserId == board.user_id ?
                <button onClick={() => this.toggleWarning()} className='delete-board-button'>
                   {warning}
                  </button>
                  : null
              }
              {this.state.deleteTab ? this.deleteButtons() : null}
              <div className='board-info-container'>
                <br/>
                  <h4>{board.title}</h4>
                <h5>Board by:
                  <Link className = 'user-link' to={`/users/${board.user_id}`}>{board.owner_username}</Link>
                </h5>
              </div>
              <div className='board-detail-image-container'>
                {board.description}
              </div>
            </section>
          }
          <Masonry className={"pins-index"}
            elementType={'ul'}
            options={masonryOptions}
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
            >
            {
              reversedSortedPins.map( (pin) => {
              return (
                <div className={"pin-modal-container"}>
                  <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>
                  <span className={'ellipsis'}>{pin.title}</span>
                </div>
              );
              })
            }
          </Masonry>
        </div>
      );
  }
}

export default PinsIndex;
