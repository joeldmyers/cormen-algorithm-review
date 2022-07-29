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

## Insertion

1. Insert node x, similar to BST. Essentially search for a null in the right place and create a new node.
2. Assign the color red to it.
3. If it's the root node, change its color to black.
4. If not, check color of parent node. If parent node is black, leave it alone.
5. If parent node is red, check the color of the node's uncle.

- If the node's uncle is red (this means the uncle's parent is black), change node's parent and uncle to black, and change grandparent's color to red. set x to be the x and repeat steps for new x.

6. If x's uncle is BLACK, then there are 4 configurations for x:

- Left left case (p is left child of g and x is left child of p)
- Left right case (p is left child of g and x is right child of p)
- Right left case (p is right child of g and x is left child of p)
- Right right case (p is right child of g and x is right child of p)

More info here > https://www.geeksforgeeks.org/red-black-tree-set-2-insert/

## Modifying / Rotations

When we insert/delete here, we may violate the above rules. So we may have to do a rotation. Here is the pseudocode for rotations:

### Left Rotation

```
y = x.right // set y
x.right = y.left // turn y's left subtree into x's right subtree
if (y.left != nil) {
  y.left.parent = x
}
y.parent = x.parent // link x's parent to y
if (x.parent === nil) {
  tree.root = y
} else if (x === x.parent.left) {
  x.p.left = y
} else {
  x.parent.right = y
}
y.left = x // put x on y's left
x.p = y
```

As part of the exercises it says to write the pseudocode for right rotate.

### Right Rotate

```
x = y.left
y.left = x.right
if (x.right != nil) {
  x.right.parent = y
}
x.parent = y.parent
if (y.parent === nil) {
  tree.root = x
} else if (y === y.parent.right) {
  y.parent.right = x
} else {
  y.parent.left = x
}
x.right = y
y.parent = x
```

## Notes on insert fixup

The fixup fixes when the tree violates any rule; in practice this is just rule 2 (root has to be black), and rule 4 (a node and its parent can't both be red). It's important to note that the current node (node being inserted) is always red.

## Deletion

Deleting a node is like deleting a node in a BST, but we have to make sure not to violate the rules of red-black trees.

## Note for when to use compared to AVL trees

AVL trees are more balanced compared to red-black trees, but they cause more rotations during insertion and deletion. If we expect a lot of insertion and deletion, red-black trees are preferred. If it slants more toward search, then AVL trees are preferred.
