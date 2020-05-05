/**
 * @module Operators
 */

import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function allTrue(...inputs: Array<Observable<boolean>>): Observable<boolean> {
  return combineLatest(
    ...inputs,
  )
    .pipe(
      map((values: boolean[]) => {
        for (let val of values) {
          if (!val) return false;
        }
        return true;
      }),
    );
}
