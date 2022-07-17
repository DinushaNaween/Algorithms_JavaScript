// Get the number for check from command line arguments.
const number = process.argv[2];

// Check the number is prime or not.
function primeNumber(number) {
  if (number <= 1) {
    return "Not a prime number.";
  } else {
    let factorCounter = 2;
    for (let devider = 2; devider < number; devider++) {
      if (number % devider === 0) {
        return "Not a prime number";
      }
    }
    return "Prime number";
  }
}

// Call the primeNumber function with "number".
console.log(primeNumber(number));

/**
Example commands for execution.

> node prime_number.js 5

Time complexity = O(n)

**/