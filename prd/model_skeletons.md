# Guild Model skeleton/Schema

## Users
User auth powered by Blockstack.js

## Blogs
column_name    | data_type | details
---------------|-----------|----------------------------
id             | integer   | null: false, primary key
author_id      | integer   | null: false, foreign key (references users)
title          | string    | null: false
body           | textarea  | null: false


## Taggings
column name    | data-type | details
---------------|-----------|----------------------------
id             | integer   | null: false, primary key
tag_id         | integer   | null: false, foreign key (references tags)
blog_id        | integer   | null: false, foreign key (references blogs)


## Tags
column name    | data-type | details
---------------|-----------|----------------------------
id             | integer   | null: false, primary key
name           | string    | null: false


## Comments
column name    | data-type | details
---------------|-----------|----------------------------
id             | integer   | null: false, primary key
body           | textarea  | null: false
blog_id        | integer   | null: false, foreign key (references blogs)
author_id      | integer   | null: false, foreign key (references users)
