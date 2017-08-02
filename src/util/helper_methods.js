export const parseDateTime = dateTimeString => {
  if (dateTimeString) {
    return dateTimeString.split(' ').slice(0, 4).join(' ');
  }
  return null;
};

export const characterLimit = string => {
  return string.substring(0, 50);
};

export const isBlogAuthor = (blog, user) => {
  return blog.authorId === user.username;
};

export const isBlogToDelete = (id, targetId) => {
  return parseInt(id, 10) === targetId;
}
