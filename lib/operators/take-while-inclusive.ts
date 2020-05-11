/**
 * @module Operators
 */

import {of, OperatorFunction, pipe} from 'rxjs';
import {concatMap, takeWhile} from 'rxjs/operators';

/**
 * Same as takeWhile but includes last value, inspired by https://stackoverflow.com/a/44644237/907986
 */
export function takeWhileInclusive<T>(predicate: (val: T) => boolean): OperatorFunction<T, T> {
  const marker = {};

  return pipe(
    concatMap((val) => {
      if (!predicate(val)) {
        // If the stopping condition matches, insert a marker after
        // the matched event.
        return of(val, marker as T);
      }
      return of(val);
    }),
    // takeWhile will stop when it sees the marker and ditch it.
    takeWhile((val) => val !== marker),
  );
}
