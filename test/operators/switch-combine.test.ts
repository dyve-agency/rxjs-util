import {of} from 'rxjs';
import {toArray} from 'rxjs/operators';
import {switchCombine} from '../../lib/operators';

describe('operators/switch-combine', () => {
  it('should switchMap to an inner observable and carry the outer observables value', async() => {
    const input = of('a', 'b', 'c');

    const result = await input.pipe(switchCombine((x) => of('x')), toArray()).toPromise();

    expect(result).toEqual([
      ['a', 'x'],
      ['b', 'x'],
      ['c', 'x'],
    ]);
  });
});
