class Tag {
  constructor({
    id,
    name,
  }){
    this.id = id;
    this.name = name;

    this.blogs = {};
  }
}

export default Tag;
