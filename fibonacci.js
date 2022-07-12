// Get which function to use
const functionSelect = process.argv[2];
// Get how many numbers requires to be in the output
const number = process.argv[3];

// Fibinacci sequence with if-else statements
function fibonacci_with_if_else(n) {
  let series = [0, 1];
  if (n === 1) {
    return [0];
  } else if (n === 2) {
    return series;
  } else {
    for (let i = 2; i < n; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }
    return series;
  }
}

// Fibinacci sequence with switch-case statements
function fibonacci_with_switch_case(n) {
  let series = [0, 1];

  switch (n) {
    case (n===1):
      return [0];
      break;

    case (n===2):
      return series;
      break;

    default:
      for (let i = 2; i < n; i++) {
        series[i] = series[i - 1] + series[i - 2];
      }
      return series;
      break;
  }
}

// Pass 1 to selest if-else statements function
if (functionSelect == 1) {
  console.log(fibonacci_with_if_else(number));
}

// Pass 2 to selest switch-case statements function
if (functionSelect == 2) {
  console.log(fibonacci_with_switch_case(number));
}

/**
Example commands for execution

> node fibonacci.js 1 5
> node fibonacci.js 2 8

Time complexity = O(n)

**/