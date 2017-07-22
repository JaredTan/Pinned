import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
    this.upload = this.upload.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  upload(event) {
    let self = this;
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error) {
        self.addImage(results[0]);
      }
    });
  }

  addImage(image) {
    this.setState({image_url: image.url})
  }

  handleSubmit(e) {
    e.preventDefault();
    const pin = Object.assign({}, this.state);
    this.props.createPin({pin});
    this.props.history.push('/');
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
            <h3>Create Pin!</h3>
           </span>
          <br/>
          <span className="create-pin-errors">{this.renderErrors()}</span>
          <div>
            <label>
              <span>Title</span>
              <br/>
              <input type="text"
                value={this.state.title}
                onChange={this.update('title')}
                className="create-pin-input"
              />
            </label>
            <br/>
            <label>
              <span>Description</span>
              <br/>
              <input type="text"
                value={this.state.description}
                onChange={this.update('description')}
                className="create-pin-input"
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
              <button onClick={this.upload}>Add Pin Image!</button>
              <input className="submit-form-button"type="submit" value={'Submit'} />
            </div>

          </div>
        </form>

        <div className="upload-image-container">
          <h5>Your Image:</h5>
          <br/>
          <img className='create-thumbnail' src={this.state.image_url}></img>
        </div>

      </div>
    );
  }
}

export default withRouter(PinCreateForm);
