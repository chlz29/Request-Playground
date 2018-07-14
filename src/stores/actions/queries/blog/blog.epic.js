import { ajax } from 'rxjs/observable/dom/ajax';
import { of } from 'rxjs/observable/of';
import { concat } from 'rxjs/observable/concat';

import * as TYPES from './types';
import { jsonplaceholder } from 'Common/constants/api';
import { headers } from 'Common/constants/headers';
import * as ACTION from './blog.action';

const getBlogUrl = `${jsonplaceholder}/posts`;
export const getBlogEpic = action$ =>
  action$.ofType(TYPES.GET_BLOG_EPIC).switchMap(() => {
    const loading = of(ACTION.getBlogLoading());

    const request = ajax(getBlogUrl, headers)
      .delay(5000)
      .takeUntil(action$.ofType(TYPES.GET_BLOG_CANCEL))
      .map(result => {
        return ACTION.getBlogSuccess(result.response);
      })
      .catch(error => {
        return of(ACTION.getBlogError(error));
      });

    return concat(loading, request);
  });
