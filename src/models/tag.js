class Tag {
  constructor({
    id,
    name,
    blogs = {},
  }){
    this.id = id;
    this.name = name;

    this.blogs = blogs;
  }
}

export default Tag;
