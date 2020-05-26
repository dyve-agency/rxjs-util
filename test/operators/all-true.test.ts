import {cold, hot} from 'jest-marbles';
import {allTrue} from '../../lib/operators';
import {bools} from '../helpers';

describe('operators/all-true', () => {

  it('should return true if all input observables are true', () => {
    const input = [
      hot('t', bools),
      hot('t', bools),
      hot('t', bools),
    ];

    expect(allTrue(...input)).toBeObservable(cold('t', bools));
  });

  it('should return false if one input observable is false', () => {
    const input = [
      hot('t', bools),
      hot('f', bools),
      hot('t', bools),
    ];

    expect(allTrue(...input)).toBeObservable(cold('f', bools));
  });

  it('should switch from false to true', () => {
    const input = [
      hot('t', bools),
      hot('ft', bools),
      hot('t', bools),
    ];

    expect(allTrue(...input)).toBeObservable(cold('ft', bools));
  });

  it('should switch from true to false', () => {
    const input = [
      hot('t', bools),
      hot('tf', bools),
      hot('t', bools),
    ];

    expect(allTrue(...input)).toBeObservable(cold('tf', bools));
  });
});
