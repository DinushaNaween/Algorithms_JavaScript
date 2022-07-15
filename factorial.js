// Get the number for factorial
const number = process.argv[2];

// Calculate the factorial
function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
      factorial = factorial * i;
    }
    return factorial;
  }
}

// Pass the number as a terminal argument
console.log(factorial(number));

/**
Example commands for execution

> node factorial.js 5

Time complexity = O(n)

**/