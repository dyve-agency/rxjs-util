/**
 * @module Operators
 */

import {NgZone} from '@angular/core';
import {Observable, pipe} from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';

export function returnToZone<T>(ngZone: NgZone) {
  return pipe(
    switchMap((x: T) => {
      return new Observable<T>(((subscriber) => {
        ngZone.run(() => {
          subscriber.next(x);
          subscriber.complete();
        });
      }));
    }),
    catchError((err) => {
      return new Observable<T>((subscriber) => {
        ngZone.run(() => {
          subscriber.error(err);
        });
      });
    }),
  );
}

