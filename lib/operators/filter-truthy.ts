/** @packageDocumentation
 * @module Operators
 */

import {OperatorFunction, pipe} from 'rxjs';
import {filter} from 'rxjs/operators';

/**
 * Remove all falsy values from the stream.
 *
 * @param leanMode If set, will interpret 0 and '' as truthy
 */
export function filterTruthy<T>(leanMode?: boolean): OperatorFunction<T | undefined | null | false, T> {
  return pipe(
    filter<T | undefined | null | false>(
      (x) => !!x || (leanMode && (typeof x === 'string' || typeof x === 'number')) || false,
    ),
  ) as OperatorFunction<T | undefined | null | false, T>;
}
