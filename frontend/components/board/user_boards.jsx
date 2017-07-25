import React from 'react';
import Masonry from 'react-masonry-component';
import BoardDetailModal from '../modal/board_detail_modal';
import BoardCreateModal from '../modal/board_create_modal';
import { Link } from 'react-router-dom';
import { values } from 'lodash';

class UserBoards extends React.Component {
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
             <div className='board-display-pictures'>
               <Link to={`/boards/${board.id}`}className="board-index-item-container">
                 <div>
                   {board.title}
                 </div>
                 <Masonry
                   elementType={'div'}
                   disableImagesLoaded={false}
                   className='board-display-pictures-items'
                   options={masonryOptions}
                   >
                  { values(board.pins).map( pin => {
                     return (
                       <div className='pins-in-board-thumbnail'>
                         <img className='pins-in-board-thumbnail-pic' src={pin.image_url}></img>
                       </div>
                     )
                   })
                 }
                 </Masonry>
               </Link>
            </div>
           );
           }
         )}
       </Masonry>
   </div>
   )



  }
}

//  <BoardDetailModal key={board.id} board={ board }></BoardDetailModal>
export default UserBoards;
