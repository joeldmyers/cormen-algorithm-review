# Greedy Algorithms

From the first paragraph: "Algorithms for optimization problems typically go through a sequence of steps, with a set of choices at each step. For many optimization problems, using dynamic programming to determine the best choices is overkill; simpler, more efficient algorithms will do. a **greedy algorithm** always makes the choice that looks best at the moment--that is, it makes a locally optimal choice in the hope that this will lead to a globally optimal solution.

## Elements of the greedy strategy

A greedy algorithm obtains an optimal solution to a problem by making a sequence of choices. At each decision point, the algorithm makes the choice that seems best at the moment. Sometimes this works.

Here are the steps used in the activity selection problem:

1. Determine the optimal substructure of the problem.
2. Develop a recursive solution.
3. Show that if we make the greedy choice, then only one subproblem remains.
4. Prove that it's always safe to make the greedy choice.
5. Develop a recursive algorithm that implements the greedy strategy.
6. Convert the recursive algoritm to an iterative algorithm.
