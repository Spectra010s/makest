//makestate.ts

class MakeHook<T> {
    private state: T

    // store internal state
    constructor(initial: T) {
      this.state = initial 
    }

    // update state
    setValue(to: T) {    
      this.state = to
    }

    // get current state
    value() {   
      return this.state
    }
  }


export function makeState<T>(initial: T) {
  // create an instance of MakeHook and return it
  return new MakeHook<T>(initial)
}