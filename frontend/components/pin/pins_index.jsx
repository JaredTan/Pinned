import React from 'react';
import PinDetailModal from '../modal/pin_detail_modal';

class PinsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllPins();
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    let { pins } = this.props;
    return (
      <ul>
        { pins.reverse().map( (pin) => {
          return (
            <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>);
          }
        )}
      </ul>
    )


  }
}

export default PinsIndex;
