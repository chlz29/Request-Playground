import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/queries/comments/comments.actions';
import Model from './model';

const objReducer = {
  [ACTION.getCommentsLoading]: (state, action) => ({
    ...state,
    loading: true,
  }),
  [ACTION.getCommentsSuccess]: (state, action) => {
    return {
      ...state,
      comments: action.payload,
      loading: false,
    };
  },
  [ACTION.getCommentsError]: (state, action) => ({
    ...state,
    comments: action.payload,
    loading: false,
  }),
};
export default handleActions(objReducer, Model);
