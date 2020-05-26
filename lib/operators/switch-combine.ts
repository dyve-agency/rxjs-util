/** @packageDocumentation
 * @module Operators
 */

import {Observable, OperatorFunction} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

/**
 * Add the value from another observable while carrying the original value.
 *
 * @param project inner observable to combine values with
 * @typeParam TSource event type of the source observable
 * @typeParam TInner event type of the inner observable
 * @return a new observable consisting of value pairs
 *
 * #### Example
 *
 * ```typescript
 *   of(1, 2, 3).pipe(switchCombine((x) => of(x * x)))
 *   // => [1, 1], [2, 4], [3, 9]
 * ```
 */
export function switchCombine<TSource, TInner>(project: (valueOfSource: TSource) => Observable<TInner>): OperatorFunction<TSource, [TSource, TInner]> {
  return switchMap((valueOfSource: TSource) => {
    return project(valueOfSource).pipe(
      map((valueOfInner: TInner) => [valueOfSource, valueOfInner] as [TSource, TInner]),
    );
  });
}
