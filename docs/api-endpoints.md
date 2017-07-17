# API Endpoints
## HTML API

### Root

+ `GET /` - loads React web app

## JSON API

### Users
+ `GET /api/users` - Fetch Users
  + Pin Search
    + Accepts a `username` query param to filter specific users.
+ `POST /api/users` - Create New User
+ `PATCH /api/users/:id` - Edit User Profile

### Session

+ `POST /api/session` - Log in User
+ `DELETE /api/session` -  Log out User

### Pins

+ `GET /api/pins` - Fetch Pins
  + Pin Search
    + Accepts a `title` and `description` query param to filter specific pins.
+ `POST /api/pins` - Create New Pin
+ `GET /api/pins/:id` - Fetch Single Pin
+ `PATCH /api/pins/:id` - Update Pin
+ `DELETE /api/pins/:id` - Remove Pin

### Boards

+ `GET /api/boards` - Fetch Boards
  + Accepts a `user_id` query param to filter specific boards.
+ `POST /api/boards` - Create New Board
+ `GET /api/boards/:id` - Fetch Single Board
+ `PATCH /api/boards/:id` - Update Board
+ `DELETE /api/boards/:id` - Remove Board

### Follows
+ `POST /api/follows` - Follow User
+ `DELETE /api/follows/:id` - Unfollow User
 + Uses currentUser on backend with user to unfollow from the front end to obtain follows id.
