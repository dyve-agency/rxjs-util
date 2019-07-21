/**
 * @module Operators
 */

import {interval, of, OperatorFunction} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

/**
 * Replays the last value every n miliseconds until the next value arrives.
 * Stops replaying when predicate evaluates to false.
 * @param predicate
 * @param period
 */
export function replayWhile<T>(predicate: (val: T) => boolean, period: number): OperatorFunction<T, T> {
  return switchMap((val) => {
    if (predicate(val)) {
      return interval(period)
        .pipe(map(() => val));
    }
    return of(val);
  });
}
