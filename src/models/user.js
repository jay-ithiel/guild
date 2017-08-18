class User {
  constructor({
    username,
    firstName,
    lastName,
    imageUrl = 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png',
    description,
  }){
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.description = description;

    this.createdAt = `${new Date()}`;

    this.authoredBlogs = {};
    this.likedBlogs = {};

    this.bookmarkedBlogs = {};

    this.authoredComments = {};
    this.likedComments = {};

    this.following = {};
    this.followers = {};
  }
}

export default User;

// user = {
//   username: 'guest_user.id',
//   profile: {
//     givenName: 'Guest',
//     familyName: 'User',
//     image: {
//       0: { contentUrl: 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png'}
//     },
//     description: 'Hello world. I am a guest user',
//   },
// };

// user = {
//   username: 'Anonymous.id',
//   profile: {
//     givenName: 'Anonymous',
//     familyName: 'User',
//     image: null,
//     description: 'Hello world. I am an anonymous user',
//   },
// };
