import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';

import * as TYPES from './types';
import { jsonplaceholder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';
import * as ACTION from './comments.actions';

const urlComments = `${jsonplaceholder}/comments`;

export const getCommentsEpic = action$ =>
  action$.ofType(TYPES.GET_COMMENTS_EPIC).switchMap(actions => {
    console.log('actions', actions.payload);

    const loading = of(ACTION.getCommentsLoading());

    let url = urlComments;

    if (actions.payload !== undefined) {
      url = `${urlComments}/${actions.payload}`;
    }

    const request = ajax
      .get(url, headers)
      .delay(2000)
      .map(result => {
        return ACTION.getCommentsSuccess(result.response);
      })
      .catch(error => {
        return ACTION.getCommentsError(error);
      });

    return concat(loading, request);
  });
