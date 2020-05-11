/**
 * @module Operators
 */

import {interval, of, OperatorFunction, SchedulerLike} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

/**
 * Replays the last value every n miliseconds until the next value arrives.
 * Stops replaying when predicate evaluates to false.
 * @param predicate
 * @param period
 * @param scheduler
 */
export function replayWhile<T>(predicate: (val: T) => boolean, period: number, scheduler?: SchedulerLike): OperatorFunction<T, T> {
  return switchMap((val) => {
    if (predicate(val)) {
      // TODO: re-emit directly? (interval takes 1 period for the 1st event)
      return interval(period, scheduler)
        .pipe(map(() => val));
    }
    return of(val);
  });
}
