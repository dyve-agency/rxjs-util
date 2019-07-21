/**
 * @module Operators
 */

import {OperatorFunction} from 'rxjs';
import {tap} from 'rxjs/operators';

export function log<T>(message?: string): OperatorFunction<T, T> {
  return tap((e) => console.log(message, e), (x) => console.error(message, x));
}
