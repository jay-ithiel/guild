import { combineReducers } from 'redux';
import UserReducer from './user_reducer';
import SessionReducer from './session_reducer';
import BlogReducer from './blog_reducer';
import TagReducer from './tag_reducer';

const RootReducer = combineReducers({
  users: UserReducer,
  session: SessionReducer,
  blogs: BlogReducer,
  tags: TagReducer,
});

export default RootReducer;
