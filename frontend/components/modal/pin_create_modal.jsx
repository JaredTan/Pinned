import React from 'react';
import Modal from 'react-modal';
import PinCreateFormContainer from '../pin/pin_create_form_container';


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

class PinCreateModal extends React.Component {
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
    return(
      <div className="pin-create-modal-div">
        <button onClick={this.openModal}>Create Pin</button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Pin Modal">
          <PinCreateFormContainer
            closeModal={this.closeModal}
             />
        </Modal>
      </div>
    );
  }
}

export default PinCreateModal;
