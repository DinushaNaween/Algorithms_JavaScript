// Get the number for factorial from command line arguments.
const number = process.argv[2];

// Calculate the factorial
function factorial(number) {
  if (number == 1 || number == 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let multiplier = 1; multiplier <= number; multiplier++) {
      factorial = factorial * multiplier;
    }
    return factorial;
  }
}

// Call factorial function with "number".
console.log(factorial(number));

/**
Example commands for execution.

> node factorial.js 5

Time complexity = O(n)

**/