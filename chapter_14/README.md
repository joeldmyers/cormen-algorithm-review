# Augmenting data structures

## How to do:

1. Choose an underlying data structure.
2. Determine additional information to maintain in the underlying data structure.
3. Verify that we can maintain the additional information for the basic modifying operations on the underlying data structure.
4. Develop new operations.

## Interval tree

Interval tree is a red-black tree (or just normal BST) that instead of maintaining numbers, maintains an interval (e.g., [9, 15]) for each node.

Intervals are sorted by the low endpoint.
