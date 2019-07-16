function func1(x) {
  let total = 0;
  for (let i = 0; i < x; i++) {
    total += i;
  }
  return total;
}
console.time("test");
func1(1000000000);
console.timeEnd("test");

// BIG 0 NOTATION

// is a way of measuring how fast a function or algoritm executes relatives
// to how many items you give it as an input

// = time complexcity (speed)
// = space complexcity (memory allocation)

// 1. 0(1) = constant runtime - takes same amount of time regardless of input size
// 2. 0(2) = linear runtime - scales one to one with the size of the input
// 3. 0(n^2) = exponential runtime - grows exponentially with the size of input
