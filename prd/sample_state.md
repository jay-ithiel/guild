React/Redux Sample State

```js
{
  currentUser: {
    id: user_id,
    name: 'username'
  },

  blogs: {
    index: {
      blog_id: {
        id: blog_id,
        author_id: author_id,
        title: 'First Blog',
        body: 'Hello world. This is the first blog.'
      }
    },
    errors: []
  },

  taggings: {
    index: {
      tagging_id: {
        id: tagging_id,
        tag_id: tag_id,
        blog_id: blog_id
      }
    },
    errors: []
  },

  tags: {
    index: {
      tag_id: {
        id: tag_id,
        name: 'News'
      }
    },
    errors: []
  },

  comments: {
    index: {
      comment_id: {
        id: comment_id,
        body: 'Hello world. This is the first comment.',
        blog_id: blog_id,
        author_id: author_id
      }
    },
    errors: []
  },

}
```
