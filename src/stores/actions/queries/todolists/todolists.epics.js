import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';

import * as TYPES from './types';
import { jsonplaceholder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';
import * as ACTION from './todolists.actions';

const urlTodoLists = `${jsonplaceholder}/todos`;

export const getTodoListsEpic = action$ =>
  action$.ofType(TYPES.GET_TODOLISTS_EPIC).switchMap(actions => {
    console.log('actions', actions.payload);

    const loading = of(ACTION.getTodoListsLoading());

    let url = urlTodoLists;

    if (actions.payload !== undefined) {
      url = `${urlTodoLists}/${actions.payload}`;
    }

    const request = ajax
      .get(url, headers)
      .delay(2000)
      .map(result => {
        return ACTION.getTodoListsSuccess(result.response);
      })
      .catch(error => {
        return ACTION.getTodoListsError(error);
      });

    return concat(loading, request);
  });
