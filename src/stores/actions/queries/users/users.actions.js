import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getUsersEpic = createAction(TYPES.GET_USERS_EPIC);
export const getUsersLoading = createAction(TYPES.GET_USERS_LOADING);
export const getUsersSuccess = createAction(TYPES.GET_USERS_SUCCESS);
export const getUsersError = createAction(TYPES.GET_USERS_ERROR);
export const getUsersCancel = createAction(TYPES.GET_USERS_CANCEL);
