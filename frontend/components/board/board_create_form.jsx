import React from 'react';

class BoardCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { createBoard, requestSingleUser, requestSinglePin, pin, currentUser, ownProps} = this.props
    const board = Object.assign({}, this.state);
    createBoard({board});
    requestSingleUser(currentUser.id);
    if (pin) {
      requestSinglePin(pin.id);
    }
    ownProps.closeModal();
  }

  render() {
    return (
      <div className="create-board-form-container">
        <form onSubmit={this.handleSubmit} className="create-board-form">
          <span className='top-message'>
            <h1>Create Board!</h1>
           </span>
          <br/>
          <div className='input-area'>
            <label>
              <span>Title</span>
              <br/>
              <input type="text"
                required
                value={this.state.title}
                onChange={this.update('title')}
                className="create-board-input"
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
            <div className="image-and-submit">
              <input className="submit-create-button"type="submit" value={'Submit'} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default BoardCreateForm;
