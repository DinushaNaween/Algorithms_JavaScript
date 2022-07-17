// Get which function to use from command line arguments.
const functionSelect = process.argv[2];
// Get how many numbers requires to be in the output from command line arguments.
const number = process.argv[3];

// Generate fibinacci sequence with if-else statements.
function fibonacci_with_if_else(number) {
  let series = [0, 1];
  if (number === 1) {
    return [0];
  } else if (number === 2) {
    return series;
  } else {
    for (let index = 2; index < number; index++) {
      series[index] = series[index - 1] + series[index - 2];
    }
    return series;
  }
}

// Generate fibinacci sequence with switch-case statements.
function fibonacci_with_switch_case(number) {
  let series = [0, 1];

  switch (number) {
    case (number === 1):
      return [0];
      break;

    case (number === 2):
      return series;
      break;

    default:
      for (let index = 2; index < number; index++) {
        series[index] = series[index - 1] + series[index - 2];
      }
      return series;
      break;
  }
}

// Pass 1 to selest if-else statements function.
if (functionSelect == 1) {
  console.log(fibonacci_with_if_else(number));
}

// Pass 2 to selest switch-case statements function.
if (functionSelect == 2) {
  console.log(fibonacci_with_switch_case(number));
}

/**
Example commands for execution.

> node fibonacci.js 1 5
> node fibonacci.js 2 8

Time complexity = O(n)

**/