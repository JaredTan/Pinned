import React from 'react';
import Modal from 'react-modal';


const style = {
  overlay : {
    position                   : 'fixed',
    top                        : 0,
    left                       : 0,
    right                      : 0,
    bottom                     : 0,
    backgroundColor            : 'rgba(0, 0, 0, .6)',
    zIndex                     : 10
  },
  content : {
    display                    : 'flex',
    justifyContent             : 'center',
    left                       : '25%',
    right                      : '25%',
    border                     : '0px solid #ccc',
    overflow                   : 'none',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '10px',
    backgroundColor            : 'transparent',
    outline                    : 'none',
    padding                    : '20px',
    zIndex                     : 11,
    opacity                    : 0,
    transition                 : 'opacity 0.4s'
  }
};

class DeleteWarningModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    let {board, deleteBoard} = this.props;
    return(
      <div className="board-create-modal-div">

        <button className=''
          onClick={this.openModal}>
          Delete Board
          <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Board Modal">
          Are you sure?
          <button onClick={deleteBoard(board)}>Delete Board: {board.title}</button>

        </Modal>
      </div>
    );
  }
}

export default DeleteWarningModal;
