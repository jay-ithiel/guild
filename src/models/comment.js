class Comment {
  constructor({
    id,
    body,
    blogId,
    authorId,
  }){
    this.id = id;
    this.body = body;
    this.blogId = blogId;
    this.authorId = authorId;

    this.createdAt = `${new Date()}`;

    this.likes = {};
  }
}

export default Comment;
