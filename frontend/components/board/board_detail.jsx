import React from 'react';
import { Link } from 'react-router-dom';

class BoardDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleBoard(this.props.id);
  }

  componentWillUnmount() {
    this.props.resetBoard();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    let { board, currentUserId, deleteBoard } = this.props;
    if (board == undefined) {
      board = {};
    }
    return (
      <section className='board-detail-container'>
        { currentUserId === board.user_id ?
          <button onClick={() => deleteBoard(board)} className='delete-button'>
            <i className="fa fa-times"></i> Delete
            </button>
            : null
          }
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
    );
  }
}

export default BoardDetail;
