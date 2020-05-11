import {cold, hot} from 'jest-marbles';
import {flip} from '../../lib/operators';
import {bools} from '../helpers';

describe('operators/flip', () => {
  it('should flip true to false and vice versa', () => {
    const input = hot('tfttfft', bools);

    expect(input.pipe(flip())).toBeObservable(cold('ftffttf', bools));
  });
});
