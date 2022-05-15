# Divide & Conquer

Idea:

- Divide the problem into a number of subproblems that are smaller instances of the same problem
- Conquer the subproblems by solving them recursively, or, if they're small enough, solve them in a straightforward manner
- Combine the solutions to the subproblem into the solutions for the original problem

For maximum subarray, the first value is an array of stock prices:
`const stockPrices = [100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90, 97];`

We transform this though, to solve the problem, into the difference, i.e., the daily change:

`const stockPriceDailyChanges = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];`
