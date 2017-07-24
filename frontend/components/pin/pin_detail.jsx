import React from 'react';
import { Link } from 'react-router-dom';

class PinDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestSinglePin(this.props.id);
  }

  componentWillUnmount() {
    this.props.resetPin();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  render() {
    let { pin } = this.props;
    return (
      <section className='pin-detail-container'>
        <div className='pin-info-container'>
          <button onClick={this.handleSubmit} className="pin-button">
            <i className='fa fa-star fa-2x'></i> Pin
          </button>
          <br/>
            <h4>{pin.title}</h4>
          <h5>Pin by:
            <Link className = 'user-link' to='/'>{pin.owner_username}</Link>
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
