# Pinned

[Link to Live Site](https://pin-ned.herokuapp.com)

Pinned is a full-stack web application, inspired by Pinterest. This site enables users to share their creative ideas as well as discover other's ideas through search and "pinning ideas to boards".

## Technology

This personal project uses Ruby on Rails with a PostgreSQL database on the back end, which provides ease in data fetching and storage with simple RESTful APIs. In conjunction with Rails, Pinned uses React.js with a Redux framework on the front-end as a modular way for front-end data flow. Redux's predictable state and self-encapsulated React components that only change when their own data changes allow for web applications like Pinned to function with efficiency and scalability.

## Features and Implementation

Pinned's database comprises of three main entities - users, pins, and boards.

### Pin Creation and Pinning

Pins are stored on the back-end with a `user_id`, that is linked to the `current_user` who created the pin after a `current_user` fetch request to the back-end. Similar to the idea of pinning an item to a pin-board, pins have the functionality of pinning to a board, and deletion by the user.

### Board Creating and Pinning

Boards are stored on the back-end, and are more private than pins. When `logged_in`, a board can be created which is a personal showcase of pins for a specific topic. When a pin is pinned to a board, an instance of `Pinning` is created, which connects a pin and a board through `pin_id` and `board_id` through a many-many relationship. Boards may also be searched for other users to view.

### User Following

In addition to the having an encrypted front-end authentication, users may edit their profile and follow/unfollow other users. Similar to `Pinning`, a many-many join table through `Following` is used to connect users to other users. A user can view other users' followers and followings through their profile page.

### Search

In order for a user to discover ideas, a searching feature was implemented that searches the entire rails database and displays all pin titles, board titles, and usernames that match a user's input query string in the search bar. Searching is the functional backbone that allows a user to use the application to its fullest.

## Technical Info

### Search
The searching feature was implemented using the rails gem [pg_search](https://github.com/Casecommons/pg_search), which utilizes named scopes to take advantage of PostgreSQL's text search capabilities. Pinned's searching mechanism uses PGSearch's `whose_X_start_with` `method_missing` to filter all items that have a column attribute `X` corresponding to a specific query string parameter obtained from the user.

The following code snippet displays the `pg_search` setup in the `Board` model and `Api::SearchesController`. By creating a `search_scope` in `Board`, PGSearch can query `Board` data in more advanced ways than vanilla ActiveRecord.  

```ruby

class Board < ActiveRecord::Base

  include PgSearch
  multisearchable :against => :title
  pg_search_scope :whose_title_starts_with, against: :title, using: {tsearch: {prefix: true} }

  validates :owner, presence: true

  belongs_to :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :pinnings, dependent: :destroy

  has_many :pins,
    through: :pinnings,
    source: :pin

end

class Api::SearchesController < ApplicationController

  def index
    query = params[:query]

    @search_results = {}
    @search_results[:pins] = Pin.whose_title_starts_with(query)
    @search_results[:boards] = Board.whose_title_starts_with(query)
    @search_results[:users] = User.whose_username_starts_with(query)

    render 'api/searches/show'
  end

end
```

### Pins Index and Boards Display
The home page of Pinned is the digital version of a person's DIY pin-board. As a result, the display of the pins should be clean, and aesthetically pleasing to foster creativity. To accomplish a pin / grid like layout, Pinned uses  [masonry-layout](https://www.npmjs.com/package/masonry-layout) to display an optimized grid layout based on the space given.

Masonry is used in both the index page, as well to display a user's boards. The following code snippet is an example implementation of a nested grid via `<Masonry></Masonry>` to display a user's boards in a their profile, as well as the first 8 pins in each board.

```javascript
import React from 'react';
import Masonry from 'react-masonry-component';
import { values } from 'lodash';

class UserBoards extends React.Component {

  ...

render() {

  ...

  const masonryOptions = {
   fitWidth: true,
   transitionDuration: 0
 };
```

```html
render (
  ...
  return(
    ...
  <Masonry
    elementType={'div'}
    disableImagesLoaded={false}
    className='profile-boards-container'
    options={masonryOptions}
    >
    ...
    { reversedSortedBoards.map( (board) => {
      return (
          ...
            <Masonry
              elementType={'div'}
              disableImagesLoaded={false}
              className='board-display-pictures-items'
              options={masonryOptions}
              >
             { values(board.pins).slice(0, 8).map( pin => {
                return (
                ...
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
  ...
  )
  )
```


### Image Hosting
  In order to manage the many images that are uploaded to Pinned, [Cloudinary](http://cloudinary.com/) is used deliver images optimized for any device quickly. Cloudinary is used alongside `dropzone` and `superagent` which allows a user to easily drag and drop photos into a form such as editing their profile.


## Future Plans

### Infinite Scroll

When the amount of pins in the database becomes too large where fetching all at once becomes unfeasible, the idea of an infinite scroll would be very handy. The index page would fetch only a certain number of pins (~50), then when the user scrolls down past a certain distance in the page, would fetch more pins from the database and add it to the page. This implementation would allow for a smoother user experience.

### Secret Boards

A user could not want their boards to be seen to the public, so adding a section in their profile of secret boards only visible to themselves would be a nice feature. This would be done with a column in the users table called `secret`, which is a boolean and chosen to be a true of false on the creation of the board.
