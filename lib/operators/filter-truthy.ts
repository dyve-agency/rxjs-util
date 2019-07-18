import {OperatorFunction, pipe} from 'rxjs';
import {filter} from 'rxjs/operators';

/**
 * Remove all falsy values from the stream.
 */
export function filterTruthy<T>(): OperatorFunction<T | undefined | null | false, T> {
  return pipe(
    filter<T | undefined | null | false>((x) => !!x),
  ) as OperatorFunction<T | undefined | null | false, T>;
}
