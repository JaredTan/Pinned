import React from 'react'

class ImageList extends React.Component {
  constructor(props) {
    super(props);
  }


render() {
  return (<ul>
      {this.props.images.map(function (image) {
        return (
          <li className="image" key={image.id}>
            <span>{image.age} ago</span>
            <img src={image.url}/>
          </li>
        );
      }, this)}
    </ul>
  );
}

}

export default ImageList;
