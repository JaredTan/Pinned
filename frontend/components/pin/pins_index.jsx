import React from 'react';
import PinModal from '../modal/pin_modal';

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
        {pins.map( (pin) => {
          return (
            <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>);
          }
        )}
    );
  }
}

export default PinsIndex;
