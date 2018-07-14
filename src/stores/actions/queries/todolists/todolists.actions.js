import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getTodoListsEpic = createAction(TYPES.GET_TODOLISTS_EPIC);
export const getTodoListsLoading = createAction(TYPES.GET_TODOLISTS_LOADING);
export const getTodoListsSuccess = createAction(TYPES.GET_TODOLISTS_SUCCESS);
export const getTodoListsError = createAction(TYPES.GET_TODOLISTS_ERROR);
export const getTodoListsCancel = createAction(TYPES.GET_TODOLISTS_CANCEL);
