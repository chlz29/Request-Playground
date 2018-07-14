import { handleActions } from 'redux-actions';
import * as ACTION from 'Actions/queries/users/users.actions';
import Model from './model';

export default handleActions(
  {
    [ACTION.getUsersSuccess]: (state, action) => ({
      ...state,
      users: action.payload,
      loading: false,
    }),
    [ACTION.getUsersLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.getUsersError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.getUsersCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  Model,
);
