# Minimum Spanning Trees

The book uses an example of pins of electronic circuits that one wants to wire together. Obviously, one would want to minimize the amount of wire used.

A **spanning tree** is a tree that "spans" a graph G - it connects all the nodes.

We want to find the **minimum-spanning-tree**

This chapter will review two algorithms for solving MST: Kruskal's algorithm and Prim's algorithm. We can make each run in time O (E lg V) using ordinary binary heaps. By using a Fibonacci heap, Prim's can improve this if |V| is much smaller than |E|.

Both algorithms are greedy. Each step must make one of several possible choices. The greedy strategy makes the choice that's best at the moment. While greedy isn't guaranteed to be correct in general, for MST, certain greedy strategies do yield a spanning tree with a minimum weight.

## Growing a MST
