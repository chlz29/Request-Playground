import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/queries/todolists/todolists.actions';
import Model from './model';
export default handleActions(
  {
    [ACTION.getTodoListsSuccess]: (state, action) => ({
      ...state,
      todolists: action.payload,
      loading: false,
    }),
    [ACTION.getTodoListsLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.getTodoListsError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.getTodoListsCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  Model,
);
