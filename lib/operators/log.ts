/** @packageDocumentation
 * @module Operators
 */

import {OperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * Log observable events (and errors) to console, prepended with the given `tag`
 * @param tag
 */
export function log<T>(tag?: string): OperatorFunction<T, T> {
  return tap((e) => console.log(tag, e), (x) => console.error(tag, x));
}
