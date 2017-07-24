import React from 'react';
import Dropzone from 'react-dropzone';
import uploadRequest from 'superagent';

const UPLOAD_PRESET = "a27edhbi";
const UPLOAD_URL = "https://api.cloudinary.com/v1_1/jaredtan/image/upload";

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    const oldUser = this.props.chosenUser;
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
  //
  // upload(event) {
  //   let self = this;
  //   event.preventDefault();
  //   cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
  //     if(!error) {
  //       self.addImage(results[0]);
  //     }
  //   });
  // }

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
          <br/>
          <span className="create-pin-errors">{this.renderErrors()}</span>
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
