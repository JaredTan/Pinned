import React from 'react';
import Modal from 'react-modal';
import PinDetailContainer from '../pin/pin_detail_container';


const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(0, 0, 0, .5)',
    zIndex          : 10
  },
  content : {
    display         : 'flex',
    justifyContent  : 'center',
    left            : '32%',
    right           : '32%',
    border          : '3px solid #ccc',
    padding         : '10px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 0.4s'
  }
};
class PinDetailModal extends React.Component {
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
    let { pin } = this.props;
    return(
      <div>
        <button
          onClick={this.openModal}>
          <img className='thumbnail' src={pin.image_url}></img>
        </button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style = {style}
          contentLabel="Pin Modal">

          <PinDetailContainer
            closeModal={this.closeModal}
            id={pin.id} pin={pin}/>
        </Modal>
      </div>
    );
  }
}

export default PinDetailModal;
