# makest

A simple TypeScript state utility using classes.  
It allows you to create a state container with getter and setter methods, fully typed and easy to use.

---

## Features

- Fully typed with TypeScript generics
- Minimal, no dependencies
- Encapsulates state in a class instance
- Simple API: `.value()` to read, `.setValue()` to update
- Works for any type: boolean, string, number, objects, etc.

---

## Installation

Copy `index.ts` into your project:

```ts
import { makeState } from "./makest"
```

---

## Usage

### Boolean toggle

```ts
const toggle = makeState<boolean>(false)

// Get the current value
console.log(toggle.value()) // false

// Update state
toggle.setValue(true)
console.log(toggle.value()) // true
```

### String state

```ts
const word = makeState<string>("Hello")

console.log(word.value()) // "Hello"

// Update value
word.setValue("This is the new word")
console.log(word.value()) // "This is the new word"
```

### Number Counter

```ts
const counter = makeState<number>(0)

// Read current value
console.log(counter.value()) // 0

// Increment manually
counter.setValue(counter.value() + 1)
console.log(counter.value()) // 1

// Increment using setTimeout
setTimeout(() => counter.setValue(counter.value() + 5), 2000)
setTimeout(() => console.log(counter.value()), 4000) // 6
```

---

## API

| Method        | Description                      |
|---------------|----------------------------------|
| `value()`     | Returns the current state value. |
| `setValue(v)` | Updates the state to a new value `v`. |

---

## Notes

- Each call to `makeState` creates a separate state instance.
- Use it for toggles, counters, text, or any simple state.
- No hooks, subscriptions, or React dependencies — just clean TypeScript.

---

## See [`examples.ts`](https://github.com/Spectra010s/makest/blob/examples.ts) for full working examples.

## Why use this instead of a plain variable?

- Encapsulates state in a single object  
- Provides getter and setter functions for consistent updates  
- Can easily be expanded later (e.g., add listeners or logging)  
- Type-safe for any data type