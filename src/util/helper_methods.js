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
  // if (id == targetId) {
  //   debugger;
  // }
  // return parseInt(id, 10) == targetId;
  return id == targetId;
}

export const createToken = () => {
  let token = '';
  let characterPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 7; i++) {
    token += characterPool.charAt(Math.floor(Math.random() * characterPool.length));
  }

  return token;
};
