import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import BlogMiddleware from './blog_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  BlogMiddleware
);

export default RootMiddleware;
