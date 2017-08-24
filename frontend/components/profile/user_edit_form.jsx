import React from 'react';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const UPLOAD_PRESET = "p52vd2qa";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/jaredtan/image/upload";

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    const oldUser = this.props.user;
    this.state = {
      description: oldUser.description,
      image_url: oldUser.image_url
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

  addImage(image) {
    this.setState({image_url: image.url})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    const id = this.props.match.params.userId;
    this.props.updateUser({user}, id);
    this.props.ownProps.closeModal();
  }

  handleImageUpload(image) {
    let upload = uploadRequest.post(UPLOAD_URL)
                        .field('upload_preset', UPLOAD_PRESET)
                        .field('file', image);

    upload.end((err, response) => {
      if (err) {
        this.props.receiveUserErrors(err);
      }
      if (response.body.secure_url !== '') {
        this.setState({
          image_url: response.body.secure_url
        });
      }
    });
  }

  displayPicture() {
    if (!this.state.image_url) {
      return (
        <div className="dropzone-text-container">
          <h4>Place Profile Picture or Click Here</h4>
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
            <h1>Update Your Profile</h1>
            <br/>
            Username: {this.props.currentUser.username}
           </span>
           <span className="create-pin-errors">{this.renderErrors()}</span>
          <br/>
          <div>
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

export default UserEditForm;
