# Red-Black Trees

Red-Black Trees are balanced way to ensure worst-case O log n time for basic operations.

## Properties

A red-black tree is a binary search tree with one extra bit of storage per node: its color, which can be either red or black. By constraining the node colors on any simple path, this ensures no such path is more than twice as long as any other, so the tree is balanced.

A red-black tree must satisfy the following properties:

1. Every node is either red or black
2. The root is black
3. Every leaf (nil / null) is black
4. If a node is red, then both its children are black.
5. For each node, all simple paths from the node to descendant leaves contain the same number of black nodes.

We call the number of black nodes on any simple path from, but not including, a node x down to a leaf the **black-height** of the node. We define the black-height of a red-black tree to be the black-height of its root.
