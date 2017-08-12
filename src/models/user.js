class User {
  constructor({
    username,
    firstName,
    lastName,
    imageUrl,
  }){
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.createdAt = `${new Date()}`;

    this.authoredBlogs = {};
    this.likedBlogs = {};

    this.authoredComments = {};
    this.likedComments = {};

    this.following = {};
    this.followers = {};
  }
}

export default User;
