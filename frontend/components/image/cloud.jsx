import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from "./image_list";

class Image extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
    this.upload = this.upload.bind(this);
    this.postImage = this.postImage.bind(this);
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'api/images',
      data: (images) => {
        this.setState({images:images}.bind(this))
      }
    })
  }

  upload(event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(!error) {
        this.postImage(results[0]);
      }
    });
  }

  postImage(image) {
    const newImage = {image: {url: image.url}};
    let self = this;
    $.ajax({
      method: 'POST',
      url: 'api/images',
      data: newImage
    }).then( (savedImage) => {
        let images = this.state.images;
        images.push(savedImage);
        self.setState({images:images})
      })
    }


  render() {
    return (
      <div>
        <button onClick={this.upload}>Post Image!</button>
        <ImageList images={this.state.images}/>
      </div>
      );
    }


  }

export default Image;
