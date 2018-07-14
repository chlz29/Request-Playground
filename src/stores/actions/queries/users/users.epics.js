import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { ajax } from 'rxjs/observable/dom/ajax';
import { concat } from 'rxjs/observable/concat';

import * as TYPES from './types';
import { jsonplaceholder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';
import * as ACTION from './users.actions';

const urlUsers = `${jsonplaceholder}/users`;

export const getUsersEpic = action$ =>
  action$.ofType(TYPES.GET_USERS_EPIC).switchMap(actions => {
    console.log('actions', actions.payload);

    const loading = of(ACTION.getUsersLoading());

    let url = urlUsers;

    if (actions.payload !== undefined) {
      url = `${urlUsers}/${actions.payload}`;
    }

    const request = ajax
      .get(url, headers)
      .delay(2000)
      .map(result => {
        return ACTION.getUsersSuccess(result.response);
      })
      .catch(error => {
        return ACTION.getUsersError(error);
      });

    return concat(loading, request);
  });
