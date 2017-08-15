# Pinned

[Link to Live Site](http://www.pinned.life)

Pinned is a full-stack web application, inspired by Pinterest. This site enables users to share their creative ideas as well as discover others' ideas through searching and "pinning ideas to boards".


![login](http://res.cloudinary.com/jaredtan/image/upload/v1501388859/Screen_Shot_2017-07-29_at_9.22.09_PM_j711de.png)

*Disclaimer: Login background image taken from [Pinterest](https://www.pinterest.com/)*

## Technology

This personal project uses Ruby on Rails with a PostgreSQL database on the back end, which provides ease in data fetching and storage with simple RESTful APIs. In conjunction with Rails, Pinned uses React.js with a Redux framework on the front-end for modular front-end data flow. Redux's predictable state and self-encapsulated React components that only change when their own data changes allow for web applications like Pinned to function with quickness and scalability.

## Features and Implementation

Pinned's database is comprised of three main entities - users, pins, and boards.

### Pin Creation and Pinning

Pins are stored on the back-end with a `user_id`, that is linked to the `current_user` who created the pin after a `current_user` fetch request to the back-end. Similar to the idea of pinning an item to a pin-board, pins have the functionality of pinning to a board, and deletion by the user.

### Board Creating and Pinning

Boards are stored on the back-end, and are more private than pins. When `logged_in`, a board may be created which is a user's personal showcase of pins for a specific topic. When a pin is pinned to a board, an instance of `Pinning` is created, which connects a pin and a board through `pin_id` and `board_id` through a many-many relationship. Boards may also be searched for other users to view.

### User Following

In addition to the having an encrypted front-end authentication, users may edit their profile and follow/unfollow other users. Similar to `Pinning`, a many-many join table through `Following` is used to connect users to other users. A user may view other users' followers and followings through their profile page.

![profile](http://res.cloudinary.com/jaredtan/image/upload/v1501388831/Screen_Shot_2017-07-29_at_9.26.44_PM_aaor2l.png)
### Search

In order for a user to discover ideas, a searching feature was implemented that searches the entire rails database and displays all pin titles, board titles, and usernames that match a user's input query string in the search bar. Searching is the functional backbone that allows a user to use the application to its fullest.

## Technical Info

### Search
The searching feature was implemented using the rails gem [pg_search](https://github.com/Casecommons/pg_search), which utilizes named scopes to take advantage of PostgreSQL's text search capabilities. Pinned uses PGSearch's `whose_X_starts_with` `method_missing` to filter all items that have a column attribute `X` corresponding to a specific query string parameter obtained from the user.

The following code snippet displays the `pg_search` setup in the `Board` model and `Api::SearchesController`. By creating a `search_scope` in `Board`, PGSearch can query `Board` data in more advanced ways than vanilla ActiveRecord.  

![search](http://res.cloudinary.com/jaredtan/image/upload/v1501389538/Screen_Shot_2017-07-29_at_9.38.30_PM_i10auc.png)

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
The home page of Pinned is the digital version of a person's DIY pin-board. As a result, the display of the boards and pins should be clean and aesthetically pleasing to foster creativity. To accomplish a pin / grid like layout, Pinned uses  [masonry-layout](https://www.npmjs.com/package/masonry-layout) to display an optimized grid layout based on the space given.

Masonry is used in both the index page, as well to display a user's boards. The following code snippet is an example implementation of a nested grid via `<Masonry></Masonry>` to display a user's boards in their profile, as well as the first 8 pins in each board.

![masonry](http://res.cloudinary.com/jaredtan/image/upload/v1501389717/Screen_Shot_2017-07-29_at_9.41.32_PM_yckicd.png)

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
        );
      })}
    </Masonry>
    ...
  )
}

export default UserBoards;
```


### Image Hosting
  In order to manage the many images that are uploaded to Pinned, [Cloudinary](http://cloudinary.com/) is used to deliver images optimized for any device quickly. Cloudinary is used alongside `dropzone` and `superagent` which allows a user to easily drag and drop photos into a form such as editing their profile.

## Design Documents

* [View Wireframes][views]
* [Database Schema][db_schema]
* [API Endpoints][api_endpoints]
* [React Components][component_hierarchy]
* [Sample State][sample-state]

[db_schema]: ./docs/schema.md
[views]: ./docs/views.md
[api_endpoints]: ./docs/api-endpoints.md
[component_hierarchy]: ./docs/component-hierarchy.md
[sample-state]: ./docs/sample-state.md


## Future Plans

### Infinite Scroll

When the amount of pins in the database becomes too large where fetching all at once becomes unfeasibly slow, and infinite scroll would prove worthy. The index page would fetch only a certain number of pins (~50), then when the user scrolls down past a certain distance in the page, another fetch request would occur and add more pins to the page. This implementation would allow for a smoother user experience.

### Secret Boards

A user could not want their boards to be seen to the public, so adding a section in their profile of secret boards only visible to themselves would be a nice feature. This would be done with a boolean column in the users table called `secret`, which would set as true or false during the creation of the board.
