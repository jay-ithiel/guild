import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BlogReducer from './blog_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  blogs: BlogReducer,
  users: UserReducer,
});

export default RootReducer;
