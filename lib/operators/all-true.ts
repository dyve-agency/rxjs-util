/** @packageDocumentation
 * @module Operators
 */

import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Combines all input boolean observables and emits true if all events are true,
 * false otherwise.
 *
 * @param inputs
 */
export function allTrue(...inputs: Array<Observable<boolean>>): Observable<boolean> {
  return combineLatest(inputs)
    .pipe(
      map((values: boolean[]) => {
        for (let val of values) {
          if (!val) return false;
        }
        return true;
      }),
    );
}
