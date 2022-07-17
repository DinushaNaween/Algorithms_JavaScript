// Get the number for check from command line arguments.
const number = process.argv[2];

// Check the number is prime or not.
function primeNumber(number) {
  if (number <= 1) {
    return "Not a prime number.";
  } else {
    let factorCounter = 2;
    for (let devider = 2; devider <= Math.sqrt(number); devider++) {
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

Time complexity

if we use ` devider < number ` code snippet in line 10,
time complexity will be O(n)
because the number if executions will increse with the number itself.

but if we use ` devider <= Math.sqrt(number) ` in the line 10,
time complexity will be O(sqrt(n))
because the number if executions will decrese with the number itself.

**/