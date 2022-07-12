This repo contains algorithms written in JavaScript.
Follwed JS algorithm series done by Vishwas from Codevolution.

Link - [JavaScript Algorithms](https://www.youtube.com/watch?v=coqQwbDezUA&list=PLC3y8-rFHvwiRYB4-HHKHblh3_bQNJTMa&index=1&ab_channel=Codevolution)

# Algorithms with JavaScript
    This repository contains multiple different algorithms and concepts in developing algorithms.

# What is an algorithm.

    An algorithm is a set of well-defined instructions to solve a particular problem.

## Algorithm should have following characteristics.

1. Well defined inputs and outputs.
2. Each etep should be clear and ambiguous.
3. Should be language independent.

## Why should we learn algorithms.

1. As a developer, we are going to come across problems that we need to solve.
2. Learning algorithms translates to learning different techniques to efficienlty solve those problems.
3. one problem can be solved in many different ways using different algorithms.
4. Each algorithm comes with its own tradeoffs when it comes to performance.

# Algorithm analysis.

There are two ways to evaluate performance of an algorithm.

    1. Time complexity
    2. Space complexity 

## How to represent complexity.

1. Big-O Notation (O-notation) - Worst case complexity
2. Omega Notation (Ω-notation) - Best case complexity
3. Theta Notation (Θ-notation) - Average case complexity

# Big-O Notation

## Time complexity

There are three different types of time complexity.

1. O(1) - Constant
2. O(n) - Linear
3. O(log<sub>n</sub>) - Logarithmic

We better avoid these types of time complexities.

1. O(n<sup>2</sup>) - Quadratic
2. O(n<sup>3</sup>) - Cubic
3. O(n!) - Factorial

Lets use following simple algorithm to explain time complexity.
We can't determine actual time a program runs, hence we are calcuating how many times the program will execute for each statement.

```javascript
1 function summation(n) {
2   let sum = 0;
3   for(let i=1 ; i <= n ; i++) {
4     sum += i;
5   }
6   return sum;
7 }
```

- We have three statements which will execute.
- Line numbers 2, 4 and 6
- Regardless of **n**, line numbers 2 and 6 will execute only one time each.
- But line 4 will execute exactly **n** times.
- So we can say the time complexity is **n+2**.


  ![Time complexity diagram 1](https://res.cloudinary.com/dinusha/image/upload/v1657600215/Github%20MD%20images/Screenshot_2022-07-12_at_10.00.00.png)

- Here how far we increse **n**, the time complexity will be **n+2** so, we can drom 2 because it will not effect on time complexity when it comes to incresing the input.

  ![Time complexity diagram 2](https://res.cloudinary.com/dinusha/image/upload/c_scale,w_250/v1657600434/Github%20MD%20images/Screenshot_2022-07-12_at_10.03.39.png)

- This is called the **Linear** time complexity - O(n) - Linear

- This algorithm can be written as follows as well,

```javascript
1 function summation(n) {
2   return (n * (n + 1)) / 2;
3 }
```

- Here, there is only one statement to execute and regardless of **n**, the program will run only 1 time.
- Time complexity of this algorithm will be 1 - O(1) - Constant.

      We managed to reduce the time complexity from O(n) to O(1).


  ![Time complexity diagram 2](https://res.cloudinary.com/dinusha/image/upload/c_scale,w_550/v1657601389/Github%20MD%20images/Screenshot_2022-07-12_at_10.19.23.png)


## Space complexity

There are three types of space complexity same as time complexity.

1. O(1) - Constant
2. O(n) - Linear
3. O(logn) - Logarithmic

We better avoid these types of space complexities.

1. O(n<sup>2</sup>) - Quadratic
2. O(n<sup>3</sup>) - Cubic
3. O(n!) - Factorial

## Summary

This diagram shows Big-O notation vs performance and this can be use for both time and space complexities.

![Time complexity diagram 2](https://res.cloudinary.com/dinusha/image/upload/c_scale,w_550/v1657602183/Github%20MD%20images/Screenshot_2022-07-12_at_10.28.04.png)

Few points co consider,

1. There are multiple algorithms exists for the same problem and there is no only right solution for a problem. Different algorithm work well under different constraints.
2. The same algorithm with the same programming language can be implemented in different ways.
3. When writing a code, don't loose the sight of the big picture. Rather than writing clever code write code that is simple to read, understand and maintain.