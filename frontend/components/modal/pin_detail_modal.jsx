import React from 'react';
import Modal from 'react-modal';
import PinDetailContainer from '../pin/pin_detail_container';

const style = {
  overlay : {
    position                   : 'fixed',
    top                        : 0,
    left                       : 0,
    right                      : 0,
    bottom                     : 0,
    backgroundColor            : 'rgba(0, 0, 0, .5)',
    zIndex                     : 10
  },
  content : {
    display                    : 'flex',
    justifyContent             : 'center',
    left                       : '15%',
    right                      : '15%',
    border                     : '1px solid #ccc',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '25px',
    outline                    : 'none',
    padding                    : '20px',
    backgroundColor            : '#f2f2f2',
    zIndex                     : 11,
    opacity                    : 0,
    transition                 : 'opacity 0.4s'
  }
};

class PinDetailModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
    };
  }

  closeModal = () => {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  openModal = () => {
    this.setState({ modalOpen: true });
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    let { pin, search } = this.props;
    return(
      <div>
        <button
          onClick={this.openModal}>
          <img className={search ? 'search-index-thumbnail' : 'index-thumbnail'} src={pin.image_url}></img>
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
