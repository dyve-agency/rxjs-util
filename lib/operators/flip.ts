import {OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';

/**
 * Flips a boolean stream value
 */
export function flip(): OperatorFunction<boolean, boolean> {
  return map((x) => !x);
}
