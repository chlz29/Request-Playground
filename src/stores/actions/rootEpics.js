import { combineEpics } from 'redux-observable';
import * as BLOG from './queries/blog/blog.epic';
import * as COMMENTS from './queries/comments/comments.epic';
import * as USERS from './queries/users/users.epics';
import * as TODOLISTS from './queries/todolists/todolists.epics';

const rootEpic = combineEpics(
  BLOG.getBlogEpic,
  COMMENTS.getCommentsEpic,
  USERS.getUsersEpic,
  TODOLISTS.getTodoListsEpic,
);

export default rootEpic;
