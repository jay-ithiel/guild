import { getFile, putFile, loadUserData } from 'blockstack';
import { isBlogAuthor, isBlogToDelete } from './helper_methods';
import {
  receiveBlogs,
  receiveUserBlogs
} from '../actions/blog_actions';

var STORAGE_FILE = 'blogs.json';

export const saveBlogs = (blogs, dispatch) => {
  putFile(STORAGE_FILE, JSON.stringify(blogs)).then(isBlogSaved => {
    let user = loadUserData();
    if (isBlogSaved) { window.location = `/blogs/${user.username}`}
  });
}

export const saveBlogsComments = (blogs, blogId) => {
  putFile(STORAGE_FILE, JSON.stringify(blogs)).then(isBlogSaved => {
    if (isBlogSaved) { window.location = `/blogs/show/${blogId}`}
  });
};

export const saveBlogsLikes = blogs => {
  putFile(STORAGE_FILE, JSON.stringify(blogs)).then(isBlogSaved => {
    // if (isBlogSaved) { window.location = `/blogs/show/${blogId}`}
  });
};

export const fetchBlogs = dispatch => {
  var blogs = {}, blogIndex = 0;

  getFile(STORAGE_FILE).then(blogItems => { // eslint-disable-line
    blogItems = JSON.parse(blogItems || '[]');

    Object.keys(blogItems).forEach((id, index) => {
      // blogItems[id].id = index+1;
      blogs[id] = blogItems[id];
      blogIndex = index+1;
    });

    dispatch(receiveBlogs(blogs, blogIndex));
  });
};

export const fetchUserBlogs = (user, dispatch) => {
  var userBlogs = {};

  getFile(STORAGE_FILE).then(blogItems => {
    blogItems = JSON.parse(blogItems || '[]');

    Object.keys(blogItems).forEach(id => {
      if (isBlogAuthor(blogItems[id], user)) {
        userBlogs[id] = blogItems[id];
      }
    });

    dispatch(receiveUserBlogs(userBlogs));
  });
};

export const deleteBlog = (targetId, dispatch) => {
  var userBlogs = {}, user = loadUserData();

  getFile(STORAGE_FILE).then(blogItems => {
    blogItems = JSON.parse(blogItems || '[]');
    Object.keys(blogItems).forEach(id => {
      if (isBlogAuthor(blogItems[id], user) && !isBlogToDelete(id, targetId)) {
        userBlogs[id] = blogItems[id];
      }
    });

    putFile(STORAGE_FILE, JSON.stringify(userBlogs)).then(isBlogSaved => {
      if (isBlogSaved) {
        dispatch(receiveUserBlogs(userBlogs));
      }
    });
  });
};
