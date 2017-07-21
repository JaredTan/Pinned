import React from 'react';
import { withRouter } from 'react-router';
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
    console.log(this.props, 'props');
    return (
      <section>
        <div>
          <form onSubmit={this.handleSubmit}>

            <button type="submit">Pin!</button>
          </form>
          <br/>
        </div>

        <div>
          <h2>{pin.title}</h2>

            <img src={pin.owner_image_url} alt="owner's pic"></img>
            <figcaption>Pin by: {pin.owner_username}</figcaption>

        </div>

        <div>
          <img src={pin.image_url} alt={pin.title}></img>
          <figcaption>{pin.description}</figcaption>
        </div>
      </section>
    );
  }
}

export default PinDetail;
