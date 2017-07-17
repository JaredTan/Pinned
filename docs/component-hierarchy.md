# Component Hierarchy

## Auth Form Container

+ Auth Form

## HomeContainer

+ NavBar
  + Pinned Logo
  + Explore
  + Profile
  + Logout

+ Search Container
  + Search Bar

+ Home Index Container
  + Home Index

+ User Container
  + User Detail
  + User Detail Edit
  + Follows Container
    + Followers
    + Followings
  + User Boards Container
    + New Board
    + User Boards
      + User Boards Index
        + Board Detail Container
          + Board Detail
  + User Pins Container
    + New Pin
      + Users Pins Index
        + Pin Detail Container
          + Pin Detail
           + Delete Pin

# Routes
Path | Component
----- | -----
"/sign-up" | "AuthFormContainer"
"/log-in" | "AuthFormContainer"
"/" |	"HomeContainer"
"/:username" | "UserContainer"
"/:username/edit" | "UserDetailEdit"
"/:username/followers" | "FollowsContainer"
"/:username/following" | "FollowsContainer"
"/:username/pins" | "PinsContainer"
"/:username/pins/new" | "New Pin"
"/:username/boards" | "BoardsIndex"
"/:username/boards/new" | "New Board"
"/pin/:pinId" | "PinDetailContainer"
"/board/:boardId" | "BoardDetailContainer"
