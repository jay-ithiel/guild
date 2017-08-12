class Blog {
  constructor({
    id,
    title,
    blogIntro,
    body,
    imageUrl,
    authorId,
    authorImageUrl,
    updatedAt,
  }){
    this.id = id;
    this.title = title;
    this.blogIntro = blogIntro;
    this.body = body;
    this.imageUrl = imageUrl;
    this.authorId = authorId;
    this.authorImageUrl = authorImageUrl;

    this.createdAt = `${new Date()}`;
    this.updatedAt = updatedAt ? updatedAt : this.createdAt;

    this.comments = {};
    this.likes = {};
    this.tags = {};
  }
}

export default Blog
