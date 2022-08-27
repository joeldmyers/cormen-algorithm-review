# Dynamic Programming

## Steps for Dynamic Programming:

1. Characterize the structure of an optimal solution.
2. Recursively define the value of an optimal solution.
3. Compute the value of an optimal solution, typically in a bottom-up way.
4. Construct an optimal solution from computed information.

Some follow-up notes from Leetcode, which I think explains it better:

To solve a DP problem, we need to combine 3 things:

- A function or data structure that will compute/contain the answer to the problem for every given state.
- A recurrence relation to transition between states.
- Base cases, so that our recurrence relation doesn't go on infinitely.
