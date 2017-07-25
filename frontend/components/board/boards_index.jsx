import React from 'react';
import Masonry from 'react-masonry-component';
import BoardDetailModal from '../modal/board_detail_modal';
import BoardCreateModal from '../modal/board_create_modal';

class BoardsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentWillMount() {
  //   this.props.requestAllBoards();
  // }

  componentDidMount() {
    this.setState({ loading: false });
  }

  createNewBoardModal(board){
    return (
      <section className="board-index-item-container">

            <BoardCreateModal createBoard={this.props.createBoard}/>
            <div className="create-new-board-text">
            </div>

      </section>
    )
  }

  render() {
    console.log(this.props,'props in boards index');
    let { boards, pins, currentUser, owner } = this.props;

    let reversedSortedBoards = _.sortBy( boards, 'id' ).reverse();


    const masonryOptions = {
     fitWidth: true,
     transitionDuration: 0
   };

   return (
     <div className='user-profile-items'>
       <Masonry
         elementType={'div'}
         disableImagesLoaded={false}
         className='profile-boards-container'
         options={masonryOptions}
         >
         { currentUser.id === owner.id ? this.createNewBoardModal() : null }
         { reversedSortedBoards.map( (board) => {
           return (
             <section className="board-index-item-container">


                   <div>
                     <BoardDetailModal key={board.id} board={ board }></BoardDetailModal>
                   </div>

             </section>
           );
           }
         )}
       </Masonry>
   </div>
   )



  }
}

export default BoardsIndex;
