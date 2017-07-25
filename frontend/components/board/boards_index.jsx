import React from 'react';
import Masonry from 'react-masonry-component';
import BoardDetailModal from '../modal/board_detail_modal';

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.requestAllBoards();
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    let { boards } = this.props;
    let masonryOptions = {
      transitionDuration: 1,
      gutter: 30,
      fitWidth: true
    };
    const { loading } = this.state;

    let reversedSortedBoards = _.sortBy( boards, 'id' ).reverse();
    if(loading) {
      return null;
    }
    return (
      <div className="board-index-container">
        { reversedSortedBoards.map( (board) => {
          return (
            <BoardDetailModal key={ board.id } board={ board }></BoardDetailModal>);
          }
        )}
      </div>
    );


  }
}

export default BoardsIndex;
