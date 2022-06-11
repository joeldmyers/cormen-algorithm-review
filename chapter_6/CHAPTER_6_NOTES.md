# Sorting

![IMG_2204](https://user-images.githubusercontent.com/4838984/172373266-021ffd50-b5e4-4279-9ce1-4d7632fbc202.jpg)

## Heapsort

### Heaps

A heap is an array object that we can view as a nearly complete binary tree. Each node of the tree corresponds to an element of the array. The tree is completely filled on all levels except possibly the lowest, which is filled from the left up to a point. The root of the tree is the first element of the tree, and given the index i of a node, we can easily compute the indices of its parent, left child, and right child.

Parent of i is i / 2, left child of i is 2i, right child of i is 2i + 1.

A max heap is a binary tree with numbers going down from high to low (>=); so root would be say 16, children would be 14 and 12, etc. Min heap is the opposite.
