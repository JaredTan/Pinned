import React from 'react';
// import PinsIndexItem from './pins_index_item';
import Masonry from 'react-masonry-component';
import PinModal from '../modal/pin_modal';
import InfiniteScroll from 'react-infinite-scroller';

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

  render() {
    let { pins } = this.props;
    let masonryOptions = {
      transitionDuration: 0,
      gutter: 25,
      fitWidth: true
    };
    const { loading } = this.state;

    if(loading) {
      return null; // render null when app is not ready
    }
    return (
      <Masonry className={"pins-index-container"}
        elementType={'ul'}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
        >
        {pins.map( (pin) => {
          return (
            <PinDetailModal key={ pin.id }
              pin={ pin }>
            </PinDetailModal>);
          }
        )}
      </Masonry>
    );
  }
}

export default PinsIndex;
