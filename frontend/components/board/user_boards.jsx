import React from 'react';
import Masonry from 'react-masonry-component';
import BoardCreateModal from '../modal/board_create_modal';
import { Link } from 'react-router-dom';
import { values } from 'lodash';

class UserBoards extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  createNewBoardModal() {
    return (
      <section className="board-index-item-container">
        <BoardCreateModal createBoard={this.props.createBoard}/>
      </section>
    )
  }

  render() {
    let { boards, pins, currentUser, owner } = this.props;
    let reversedSortedBoards = _.sortBy( boards, 'id' ).reverse();
    let {loading} = this.state;
    const masonryOptions = {
     fitWidth: true,
     transitionDuration: 0
   };

   return (
     this.state.loading ?
     <div className="spinner"></div> :
     <div className='user-profile-items'>
       <Masonry
         elementType={'div'}
         disableImagesLoaded={false}
         className='profile-boards-container'
         options={masonryOptions}
         >
         { currentUser.id === owner.id ? this.createNewBoardModal() : null }
         { reversedSortedBoards.map( (board, idx) => {
           return (
             <div key={idx}>
               <Link to={`/boards/${board.id}`} key={idx} className="board-index-item-container">
                 <div>
                   {board.title}
                 </div>
                 <Masonry
                   elementType={'div'}
                   disableImagesLoaded={false}
                   options={masonryOptions}
                   >
                  { values(board.pins).slice(0, 8).map( (pin,idx) => {
                     return (
                       <div key={idx}>
                         <img className='pins-in-board-thumbnail-pic' key={idx} src={pin.image_url}></img>
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

export default UserBoards;
