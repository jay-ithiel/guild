# Guild API endpoints
(Subject to updates & change to fit blockstack api)

### Home
- `GET /` - landing page of Guild (Home Component)

### Users
- `GET /users/:id` - user profile page (UserProfile Component)
- `POST /users` - create new user
- `PATCH /users` - edit existing user

### Blogs
- `GET /blogs/:id` - blog show page (Blog Component)
- `POST /blogs` - create new blog (BlogForm Component)
- `PATCH /blogs/:id` - edit existing blog (BlogForm Component)
- `DELETE /blogs/:id` - delete existing blog

### Tags
- `POST /tags` - create new tag

### Taggings
- `POST /taggings` - create new tagging

### Comments
- `POST /comments` - create new comment
- `PATCH /comments/:id` - edit existing comment
- `DELETE /comments/:id` - delete existing comment
