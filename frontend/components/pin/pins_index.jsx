import React from 'react';
import Masonry from 'react-masonry-component';
import PinDetailModal from '../modal/pin_detail_modal';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.requestAllPins();
  }

  componentDidMount() {
    this.setState({ loading: false });
  }


  shufflePins(pins) {
    let i = 0;
    let j = 0;
    let temp = null;

    for (i = pins.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = pins[i];
      pins[i] = pins[j];
      pins[j] = temp;
    }
    return pins;
  }

  render() {
    let { pins } = this.props;
    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };
    const { loading } = this.state;

    let reversedSortedPins = _.sortBy( pins, 'id' ).reverse();
    if(loading) {
      return null;
    }
    return (
      <div className='pin-index-container'>
        <Masonry className={"pins-index"}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
          >
          { reversedSortedPins.map( (pin) => {
            return (
              <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>);
            }
          )}
        </Masonry>
      </div>
    );


  }
}

export default PinsIndex;
