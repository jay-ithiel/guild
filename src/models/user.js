class User {
  constructor({
    username,
    firstName,
    lastName,
    imageUrl,
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

    this.authoredComments = {};
    this.likedComments = {};

    this.following = {};
    this.followers = {};
  }
}

export default User;
