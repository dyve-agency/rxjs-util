import {of} from 'rxjs';
import {toArray} from 'rxjs/operators';
import {takeWhileInclusive} from '../../lib/operators';

describe('operators/take-while-inclusive', () => {
  it('should stop AFTER the condition evaluates to false', async () => {
    const input = of(0, 1, 2, 3, 4, 5);

    const result = await input.pipe(takeWhileInclusive((x) => x < 2), toArray()).toPromise();

    expect(result).toEqual([0, 1, 2]);
  });
});
