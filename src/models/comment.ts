import Blog from './blog';

class Comment {
    public body: string;
    public blogId: number;
    public authorId: number;
    public blog: Blog;

    constructor(
        body: string,
        blogId: number,
        authorId: number
    ) {
        this.body = body;
        this.blogId = blogId;
        this.authorId = authorId;
    }

    public setBlog(blog: Blog) {
        this.blog = blog;
    }
}

export default Comment;
