import {Observable, OperatorFunction} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

/**
 * Add the value from another observable while carrying the original value.
 */
export function switchCombine<T, R>(toCombine: (valA: T) => Observable<R>): OperatorFunction<T, [T, R]> {
  return switchMap((valA: T) => {
    return toCombine(valA).pipe(
      map((valB: R) => [valA, valB] as [T, R]),
    );
  });
}
