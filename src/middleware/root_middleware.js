import { applyMiddleware } from 'redux';
import UserMiddleware from './user_middleware';
import SessionMiddleware from './session_middleware';
import BlogMiddleware from './blog_middleware';
import TagMiddleware from './tag_middleware';

const RootMiddleware = applyMiddleware(
  UserMiddleware,
  SessionMiddleware,
  BlogMiddleware,
  TagMiddleware,
);

export default RootMiddleware;
