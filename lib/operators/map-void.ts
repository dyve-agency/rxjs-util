/**
 * @module Operators
 */

import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Maps observable value to void -> swallows any output, to keep
 * public return types cleaner.
 */
export function mapVoid<T>(): OperatorFunction<T, void> {
  return map(() => {});
}
