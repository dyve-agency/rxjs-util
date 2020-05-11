import {cold, hot} from 'jest-marbles';
import {filterTruthy} from '../../lib/operators';
import {bools} from '../helpers';

describe('operators/filter-truthy', () => {
  const values = {
    ...bools,
    a: 'foo',
    e: '',
    n: null,
    u: undefined,
    z: 0,
    o: 1,
  };

  it('should let only truthy values pass', () => {
    const input = hot('aenuzotf', values);

    expect(input.pipe(filterTruthy())).toBeObservable(cold('a----ot-', values));
  });

  it('should provide an option to filter only false, null, undefined (not 0 or empty string)', () => {
    const input = hot('aenuzotf', values);

    expect(input.pipe(filterTruthy(true))).toBeObservable(cold('ae--zot-', values));
  });
});
