{
  session: {
    currentUser: {
      id: 1,
      username: "jaredtan123"
    },
    errors: []
  },

  users: {
    1: {
      id: 1,
      username: "jaredtan123",
      image_url: "/app/assets/images/jared.png",
      description: "Curious Human Being",
      pins: [1, 5, 10, 29],
      boards: [1, 2, 3],
      follows: {
        followers: [2, 5, 8],
        following: [2, 5, 6]
      }
    }
  },

  pins: {
    pins: {
      1: {
        id: 1,
        title: "Science is Awesome",
        url: "https://czbiohub.org/",
        image_url: "https://static1.squarespace.com/static/562d385fe4b0e2b30b0c79b4/t/59289a16725e2556b3a92ac4/1495833115388/CZBH+logo.jpeg",
        description: "To cure all disease in our children's lifetime",
        user_id: 1
      },
    },
    errors: []
  },

  boards: {
    1: {
      id: 1,
      name: "Science",
      description: "Nerding out is the way of life",
      pins: [3, 7],
      user_id: 1
    },
    errors: []
  }

}
