# @zeit-dev/rxjs-util

This is a small and incoherent collection of RxJS operators we commonly
commonly use across our projects.

## Installation

```shell
npm add @zeit-dev/rxjs-util
```
or
```shell
yarn add @zeit-dev/rxjs-util
```

## Operators

### [[allTrue]]

Combine several boolean observables, and return `true` if 
all latest values are `true`, `false` otherwise.

```typescript
  allTrue(of(false), of(true)).subscribe((x) => console.log(x))
  // => false
``` 

### [[filterTruthy]] 

This is basically just `filter(x => !!x)` with the 
added benefit of collapsing an input type of `T | undefined` to just `T`

```typescript
  of(true, false, '', 0, null, undefined, true, 'a', 1).pipe(filterTruthy()).subscribe((x) => console.log(x));
  // => true, true, 'a', 1
``` 

### [[flip]] 

Just a shortcut for `map(x => !x)`

```typescript
  of(true).pipe(flip()).subscribe((x) => console.log(x));
  // => false
``` 

### [[log]] 

This is a debug tool, that `tap`s into the observable stream,
and uses `console.log` to output each event, and `console.error` for
errors. To identify the log output, you can specify a log category/tag:

```typescript
  interval(1000).pipe(log('Here')).subscribe()
  // => Here 1, Here 2, Here 3
``` 

### [[mapVoid]]

Casts observable to `Observable<void>`.

### [[replayWhile]]

Replays the last value every n miliseconds until the next value arrives.
Stops replaying when predicate evaluates to false.

### [[returnToZone]]

Helper to return to the Angular zone (`NgZone`), when an event arrives.
Useful if you have external async sources.

```typescript
  // inject ngZone: NgZone
  from(someExternalPromise).pipe(returnToZone(ngZone))
```

### [[switchCombine]]

`SwitchMap` to an inner observable and carry the current value into the output.
Same as

```typescript
  switchMap((x) => innerObservable.pipe(map((y) => [x, y])))
```

### [[takeWhileInclusive]]

Same as `takeWhile` but emits the last event as well.
