import {cold, hot, Scheduler} from 'jest-marbles';
import {takeWhile} from 'rxjs/operators';
import {replayWhile} from '../../lib/operators';

describe('operators/replay-while', () => {
  it('should replay a value in intervals', () => {
    const input = hot('a----b----');

    let n = 6;
    const result = input.pipe(
      replayWhile(() => true, 20, Scheduler.get()),
      takeWhile(() => --n > 0),
    );

    expect(result).toBeObservable(cold('--a-a--b-b-b-|'));
  });
});
