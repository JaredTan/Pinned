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
    return (
      <section>
        <div>
          <form onSubmit={this.handleSubmit}>

            <button type="submit">
              <h1>Pin!</h1>
            </button>
          </form>
          <br/>
        </div>

        <div>

            <h3>{pin.title}</h3>

          <figcaption>Pin by: {pin.owner_username}</figcaption>
        </div>

        <div>
          <figcaption>{pin.description}</figcaption>
          <a href={pin.url}>
            <img src={pin.image_url} alt={pin.title}></img>
          </a>
        </div>
      </section>
    );
  }
}

export default PinDetail;
