import {of, throwError} from 'rxjs';
import {catchError, toArray} from 'rxjs/operators';
import {log} from '../../lib/operators';
import restoreAllMocks = jest.restoreAllMocks;

describe('operators/log', () => {
  it('should log events to console', async() => {
    spyOn(console, 'log');
    const input = of('foo', 'bar');

    await input.pipe(log('tag'), toArray()).toPromise();

    expect(console.log).toHaveBeenNthCalledWith(1, 'tag', 'foo');
    expect(console.log).toHaveBeenNthCalledWith(2, 'tag', 'bar');

    restoreAllMocks();
  });

  it('should log errors to console', async() => {
    spyOn(console, 'error');
    const input = throwError('foo');

    await input.pipe(log('tag'), catchError(() => of({}))).toPromise();

    expect(console.error).toHaveBeenNthCalledWith(1, 'tag', 'foo');
    restoreAllMocks();

  });
});
