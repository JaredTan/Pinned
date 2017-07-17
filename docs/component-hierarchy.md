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
  + Users Index (Search Results)
  + Pins Index (Pin Results)

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
          + Board Detail Edit
  + User Pins Container
    + New Pin
      + Users Pins Index
        + Pin Detail Container
          + Pin Detail
            + Delete Pin
          + Pin Detail Edit

# Routes
Path | Component
----- | -----
`/sign-up` | `AuthFormContainer`
`/log-in` | `AuthFormContainer`
`/` | `HomeContainer`
`/search` | `PinSearchContainer`
`/search/pins/:searchItem` | `UsersIndex`
`/search/users/:searchItem` | `PinsIndex`
`/:username` | `UserContainer`
`/:username/edit` | `UserDetailEdit`
`/:username/followers` | `FollowsContainer`
`/:username/following` | `FollowsContainer`
`/:username/pins` | `PinsContainer`
`/:username/pins/new` | `NewPin`
`/:username/boards` | `BoardsIndex`
`/:username/boards/new` | `NewBoard`
`/pin/:pinId` | `PinDetailContainer`
`/board/:boardId` | `BoardDetailContainer`
