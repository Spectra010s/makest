// examples.ts
import { makeState } from "makestate"

const toggle = makeState<boolean>(false)
const word = makeState<string>("Hello")
const counter = makeState<number>(0)

console.log("Initial values:")
console.log("toggle:", toggle.value())
console.log("word:", word.value())
console.log("counter:", counter.value())

// 1 second → increment counter
setTimeout(() => {
  counter.setValue(counter.value() + 1)
  console.log("Counter +1:", counter.value())
}, 1000)

// 2 seconds → toggle state
setTimeout(() => {
  toggle.setValue(true)
  console.log("Toggle updated:", toggle.value())
}, 2000)

// 3 seconds → update word
setTimeout(() => {
  word.setValue("Updated after 3 seconds")
  console.log("Word updated:", word.value())
}, 3000)

// 4 seconds → increment counter again
setTimeout(() => {
  counter.setValue(counter.value() + 5)
  console.log("Counter +5:", counter.value())
}, 4000)

// 5 seconds → final state snapshot
setTimeout(() => {
  console.log("Final state:")
  console.log("toggle:", toggle.value())
  console.log("word:", word.value())
  console.log("counter:", counter.value())
}, 5000)