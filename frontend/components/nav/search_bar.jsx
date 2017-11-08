import React from 'react';
import { Link } from 'react-router-dom';
import PinDetailModal from '../modal/pin_detail_modal';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    setTimeout(this.setState({searchQuery: e.target.value}, () => this.props.requestSearchResults(this.state.searchQuery)), 50)
  }

  componentWillMount() {
    this.props.resetSearchResults();
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({searchQuery: ""});
  }

  createResultsList = (items, type) => {
    let {resetSearchResults} = this.props;
    const listItems = items.map((item, idx) => {
      if (type === "Pins") {
        return (
          <li key={idx} onClick={this.handleReset}>
              <PinDetailModal key={ item.id } pin={ item } search={ true }>{item.title}</PinDetailModal>
          </li>
        );
      } else if (type === "Boards") {
        return (
          <li key={idx} onClick={this.handleReset}>
            <Link to={`/boards/${item.id}`}>
              <span id="list-item">{item.title}</span>
            </Link>
          </li>
        );
      } else if (type === "Users") {
        return (
          <li key={idx} onClick={this.handleReset}>
            <Link to={`/users/${item.id}`}>
              <img id="list-item-user"src={item.image_url}/>
              <span id="list-item">{item.username}</span>
            </Link>
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

    searchDropDown() {
      const {searchResults} = this.props;
      const pins = searchResults.pins || [];
      const boards = searchResults.boards || [];
      const users = searchResults.users || [];
      let pinsList;
      let boardsList;
      let usersList;
       if (Object.keys(searchResults).length > 0) {
         pinsList = pins.length > 0 ? this.createResultsList(pins, "Pins") : null;
         boardsList = boards.length > 0 ? this.createResultsList(boards, "Boards") : null;
         usersList = users.length > 0 ? this.createResultsList(users, "Users") : null;
       }
       let dropdown;
       document.addEventListener("click", (e) => {
         dropdown = document.getElementsByClassName('search-results-dropdown-container')[0];
         if (e.target.id === 'list-item' || e.target.id === 'list-item-user' || e.target.id === 'search-index-thumbnail') {
           dropdown.style.display = "none";
         } else if (e.path.includes(dropdown) || e.target.id === 'search-bar') {
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

  render() {
    return(
      <div className="search-container">
        <input id="search-bar" type="text" placeholder='Search' value={this.state.searchQuery} onChange={this.handleInput}/>
        {this.searchDropDown()}
      </div>
    );
  }
}

export default SearchBar;
