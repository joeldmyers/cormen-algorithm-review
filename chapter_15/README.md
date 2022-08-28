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

## Elements of dynamic programming

Common Pattern:

1. Solution to the problem consists of making a choice. Making this choice leaves one or more subproblems to be solved.
2. For a given problem, you are given the choice that leads to an optimal solution.
3. Given the choice, you determine which subproblems ensure and how to best characterize the resulting space of subproblems.
4. You show that the solutions to the subproblems used within an optimal solution to the problem must themselves be optimal by using a cut and paste technique. [Note, this last point is more about proving optimality than about any implementation questions.]
