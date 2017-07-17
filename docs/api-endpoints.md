# API Endpoints
## HTML API

### Root

+ `GET /` - loads React web app

## JSON API

### Users

+ `POST /api/users`
+ `PATCH /api/users/:id`

### Session

+ `POST /api/session`
+ `DELETE /api/session`

### Search

+ `GET /search/pins`
  + Pin Search
    + Accepts a `search_item` query param to filter specific pins.
+ `GET /search/users`
  + User Search
    + Accepts a `search_item` query param to filter specific users.

### Pins

+ `GET /api/pins`
+ `POST /api/pins`
+ `GET /api/pins/:id`
+ `PATCH /api/pins/:id`
+ `DELETE /api/pins/:id`

### Boards

+ `GET /api/boards`
+ `POST /api/boards`
+ `GET /api/boards/:id`
+ `PATCH /api/boards/:id`
+ `DELETE /api/boards/:id`

### Follows

+ `GET /api/followers`
+ `GET /api/following`
+ `POST /api/following`
+ `DELETE /api/following/:id`
