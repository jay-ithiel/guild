import Comment from './comment';

class Blog {
  public id: number;
  public title: string;
  public blogIntro: string;
  public body: string;
  public imageUrl: string;
  public authorId: number;
  public authorImageUrl: string;
  public createdAt: string;
  public updatedAt: string;
  public comments: Comment[] = [];

  constructor(
    id: number,
    title: string,
    blogIntro: string,
    body: string,
    imageUrl: string,
    authorId: number,
    authorImageUrl: string,
    updatedAt: string,
  ) {
    this.id = id;
    this.title = title;
    this.blogIntro = blogIntro;
    this.body = body;
    this.imageUrl = imageUrl;
    this.authorId = authorId;
    this.authorImageUrl = authorImageUrl;
    this.createdAt = `${new Date()}`;
    this.updatedAt = this.createdAt;
  }

  public addComment(comment: Comment) {
    this.comments.push(comment)
  }

  public getComments(): Comment[] {
    return this.comments;
  }
}

export default Blog;
