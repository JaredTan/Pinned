import React from 'react';
import { Link, withRouter } from 'react-router';
import { values } from 'lodash';
import PinSearchDetailModal from '../modal/pin_search_detail_modal';

class SearchBar extends React.Component {
  constructor(props){
    super(props);

    this.state = {searchQuery: ""};
    this.handleInput = this.handleInput.bind(this);
    this.createResultsList = this.createResultsList.bind(this);
    this.handlePinClick = this.handlePinClick.bind(this);
  }

  handleInput(e){
    e.preventDefault();
    setTimeout(this.setState({searchQuery: e.target.value}, () => this.props.requestSearchResults(this.state.searchQuery)), 50)
  }

  handlePinClick(pin){
    let {resetSearchResults} = this.props;
    console.log('?');
    return (e) => {
      resetSearchResults();
      <PinDetailModal key={ pin.id } pin={ pin }></PinDetailModal>
    };
  }

  createResultsList(items, type){
    let {resetSearchResults} = this.props;
    const listItems = items.map((item, idx) => {
      if (type === "Pins"){
        return (
          <li key={idx}>
              <PinSearchDetailModal className="list-item-pin" key={ item.id } pin={ item }>{item.title}</PinSearchDetailModal>
          </li>
        );
      } else if (type === "Boards") {
        return (
          <li key={idx}>
            <button onClick={resetSearchResults}>
              <span className="list-item-board">{item.title}</span>
            </button>
          </li>
        );
      } else if (type === "Users") {
        return (
          <li key={idx}>
            <button onClick={resetSearchResults}>
              <div className="list-item-user">
                <img src={item.image_url}/>
              </div>
              <span className="list-item-username">{item.username}</span>
            </button>
          </li>
        );
      }
    });

    return (
      <div className={type === 'Users' ? "user-search-items-container" : "search-items-container"}>
        <h3 className='search-type'>{type}</h3>
        <ul className='section-items-container'>{listItems}</ul>
        <br/>
      </div>
    );

  }

    searchDropDown(){
      const searchResults = this.props.searchResults;
      const pins = searchResults.pins || [];
      const boards = searchResults.boards || [];
      const users = searchResults.users || [];

      let pinsList;
      let boardsList;
      let usersList;

       if (Object.keys(searchResults).length) {
         pinsList = pins.length > 0 ? this.createResultsList(pins, "Pins") : null;
         boardsList = boards.length > 0 ? this.createResultsList(boards, "Boards") : null;
         usersList = users.length > 0 ? this.createResultsList(users, "Users") : null;
       }

       let dropdown;

       document.addEventListener("click", (e) => {
         dropdown = document.getElementsByClassName('search-results-dropdown-container')[0];
         if (e.path.includes(dropdown) || e.target.id === 'search-bar'){
           dropdown.style.display = "block";
         } else {
           dropdown.style.display = "none";
         }
       });

      return (
        <div className="search-results-dropdown-container">
          {pinsList ? pinsList : null }
          {boardsList ? boardsList : null }
          {usersList ? usersList : null}
        </div>
      );
    }



  render(){

    return(
      <div className="search-container">
        <input id="search-bar" type="text" placeholder='Search' value={this.state.searchQuery} onChange={this.handleInput}/>
        {this.searchDropDown()}
      </div>
    );
  }

}

export default SearchBar;
