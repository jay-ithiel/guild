class Comment {
  constructor({
    id,
    body,
    blogId,
    authorId,
    authorName,
  }){
    this.id = id;
    this.body = body;
    this.blogId = blogId;
    this.authorId = authorId;
    this.authorName = authorName;
    this.createdAt = `${new Date()}`;

    this.likes = {};
  }
}

export default Comment;
