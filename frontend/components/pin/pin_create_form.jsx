import React from 'react';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const UPLOAD_PRESET = "p52vd2qa";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/jaredtan/image/upload";

class PinCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
      image_url: '',
      user_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.resetPinErrors();
  }

  addImage(image) {
    this.setState({image_url: image.url})
  }

  handleSubmit(e) {
    e.preventDefault();
    const pin = Object.assign({}, this.state);
    if (pin.image_url == '') {
      pin.image_url = "http://res.cloudinary.com/jaredtan/image/upload/v1501385628/default_image_zuj6wy.jpg"
    }
    this.props.createPin({pin});
    this.props.ownProps.closeModal();
  }

  handleImageUpload(image) {
    let upload = uploadRequest.post(UPLOAD_URL)
                        .field('upload_preset', UPLOAD_PRESET)
                        .field('file', image);

    upload.end((err, response) => {
      if (err) {
        this.props.receivePinErrors(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
        this.props.resetPinErrors();
      }
    });
  }

  displayPicture() {
    if (this.state.image_url === '') {
      return (
        <div className="dropzone-text-container">
          <h4>Place Image or Click here</h4>
        </div>
        )
      } else {
      return (
        <div className="upload-image-container">
          <img className='create-thumbnail' src={this.state.image_url}></img>
        </div>
      )
    }
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="create-pin-form-container">
        <form onSubmit={this.handleSubmit} className="create-pin-form">
          <span className='top-message'>
            <h1>Create Pin!</h1>
           </span>
          <br/>
          <span className="create-pin-errors">{this.renderErrors()}</span>
          <div className='input-area'>
            <label>
              <span>Title</span>
              <br/>
              <input type="text"
                required
                value={this.state.title}
                onChange={this.update('title')}
                className="create-pin-input"
              />
            </label>
            <br/>
            <label>
              <span>Description</span>
              <br/>
              <textarea rows="4" cols="50"
                value={this.state.description}
                onChange={this.update('description')}
                id="description"
              />
            </label>
            <br/>
              <label>
                <span>URL (optional)</span>
                <br/>
                <input type="text"
                  value={this.state.url}
                  onChange={this.update('url')}
                  className="create-pin-input"
                />
              </label>
            <div className="image-and-submit">
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.handleImageUpload}
                className="create-form-dropzone">
                {this.displayPicture()}
              </Dropzone>
              <input className="submit-create-button"type="submit" value={'Submit'} />
            </div>

          </div>
        </form>

      </div>
    );
  }
}

export default PinCreateForm;
