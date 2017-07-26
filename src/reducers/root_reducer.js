import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BlogReducer from './blog_reducer';

const RootReducer = combineReducers({
    session: SessionReducer,
    blogs: BlogReducer
});

export default RootReducer;
