// Task 8:
// Create a Private Counter for Multiple Instances
// Write a closure-based function that creates multiple instances of a private counter. Each instance should have its own count, independent of the others. For example:

function createInstanceCounter() {
    let count = 0;
    return function () {
      count++;
      return count;
    };
  }
  // example
  const counter1 = createInstanceCounter();
  const counter2 = createInstanceCounter();
  
  console.log(counter1()); // Output: 1
  console.log(counter1()); // Output: 2
  console.log(counter2()); // Output: 1
  console.log(counter1()); // Output: 3