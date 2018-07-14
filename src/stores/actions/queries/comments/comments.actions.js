import { createAction } from 'redux-actions';
import * as TYPES from './types';

export const getCommentsEpic = createAction(TYPES.GET_COMMENTS_EPIC);
export const getCommentsLoading = createAction(TYPES.GET_COMMENTS_LOADING);
export const getCommentsSuccess = createAction(TYPES.GET_COMMENTS_SUCCESS);
export const getCommentsError = createAction(TYPES.GET_COMMENTS_ERROR);
export const getCommentsCancel = createAction(TYPES.GET_COMMENTS_CANCEL);
