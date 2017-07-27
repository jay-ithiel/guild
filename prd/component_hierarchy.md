# Component Hierarchy

## App/Root
  - Navbar Component
  - Home Component

## Home

### Home Component
  - Blogs Component

## Navbar

### Navbar Component
  - Logo Component
  - Search Component
  - NavMenu Component

### Logo Component
  - Logo Image

### Search Component
  - Search Input form

### NavMenu Component
  - Renders UserNavMenu Component if User is logged in
  - Renders GuestNavMenu Component if User is not logged in

### UserNavMenu Component
  - Write a blog button
  - HamburgerMenu Component

### HamburgerMenu Component
  - My Blogs
  - Profile
  - Log Out

### GuestNavMenu Component
- Sign-up button
- Sign-in button

## Users

### UserImage Component
  - User Image

### AboutUser Component
  - UserImage Component
  - User name
  - User about/intro

### Profile Component
  - AboutUser Component
  - Blogs by `User name`
  - Blogs Component

### UserBlogs Component
  - BlogLink Component
  - Edit/delete blog buttons

## Blogs

### Blogs Component
  - BlogLink Component

### BlogLink Component
  - Blog Image
  - Blog Title
  - Blog Intro

### Blog Component
  - Blog Title
  - Blog Image
  - Blog Body
  - AboutUser Component
  - RelatedBlogs Component
  - CommentForm Component
  - Comments Component

### BlogForm Component
  - Blog Title input
  - Blog image input
  - Blog body input
  - TaggingsForm Component
  - Create/Edit blog button

### RelatedBlogs Component
  - BlogLink Component

## Tags/Taggings

### TaggingsForm Component
  - Tag Component
  - TagForm Component

### Tag Component
  - Tag name

### TagForm Component
  - Tag name input
  - Create tag button

## Search

### Search Component
  - Search input
  - TagsFilter Component
  - Blogs Component

### TagsFilter Component
  - Tag Component
  - TagForm Component

## Comments

### CommentForm Component
  - Comment body input
  - Create comment button

### Comments Component
  - Comment Component

### Comment Component
  - UserImage Component
  - Comment author name
  - Comment body
