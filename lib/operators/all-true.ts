/**
 * @module Operators
 */

import {every} from 'lodash-es';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function allTrue(...inputs: Array<Observable<boolean>>): Observable<boolean> {
  return combineLatest(
    ...inputs,
  )
    .pipe(
      map((values: boolean[]) => every(values)),
    );
}
