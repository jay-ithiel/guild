import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BlogMiddleware from './blog_middleware';
import UserMiddleware from './user_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BlogMiddleware,
  UserMiddleware,
);

export default RootMiddleware;
