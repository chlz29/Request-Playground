import { combineReducers } from 'redux';

import blogsReducer from './blog/blog.reducers';
import commentsReducer from './comments/comments.reducers';
import usersReducer from './users/users.reducers';
import todolistsReducer from './todolists/todolists.reducers';

const rootReducers = combineReducers({
  blogs: blogsReducer,
  comments: commentsReducer,
  users: usersReducer,
  todolists: todolistsReducer,
});

export default rootReducers;
