# B-Trees

## Overview

B-trees are balanced search trees designed to work well on disks or other direct-access storage devices. They're self-balancing, like red-black trees or AVL trees, but they're better for minimizing disk I/O operations, since I/O with secondary storage on magnetic disks is much slower than I/O with primary memory (silicon memory chips, i.e., RAM).

B-trees generalize binary search trees in a natural manner. If an internal B-tree node x contains x.n keys, then x has x.n + 1 children. Basically a single node contains a subrange, which can be potentially a lot of data. This helps because getting the read/write head in the right place to get data from the plattter is slow.

Number of "pages" of data read or written can be used as a first-order approximation of total time spent accessing the disk, even though the actual time varies depending on where the arms are and where the data is located.

B-tree algorithms copy selected pages from ddisk into main memory as needed and write back onto disk the pages that have changed. B-tree algorithms keep only a constant number of pages in main memory at any time.

With B-Trees, there will often be very large branching factors - 50-2000. A large branching factor dramatically reduces both the height of the tree and the number of disk accesses required to find any key.

## Definition of B-Trees

To keep things simple, we assume that any satellite information is stored in the same node as the key. In practice, one might just store a pointer.

A B-tree T is a rooted tree with the following properties:

1. Every node x has the following attributes:

- x.n is the number of keys currently stored in node x,
- the x.n keys are stored in non-decreasing order.
- x.leaf is boolean: true if it's a leaf, false if it's an internal node.

2. Every internal node contains x.n + 1 pointers.

3. The keys x.key[i] separate the range stored in each subtree. This, I think, isn't articulated in a very intuitive way... I get it but having a hard time paraphrasing.

4. All leaves have the same depth - i.e., it's height-balanced.

5. Nodes have lower and upper bounds on the number of keys they can contain. This min can be t >= 2; called **minimum degree** of the B tree. Every node other than the root must have t - 1 keys. Every internal node other than the root thus has at least t children. If the tree is non-empty, the root must have at least 1 key. Also, every node may contain **at most 2t - 1 keys**. An internal node can thus have at most 2t children. We say a node is **full** if it contains exactly 2t - 1 keys. Obviously for this, we'll have to do some work to maintain this property.

The simplest B-tree is when t = 2. Every internal node has either 2, 3, or 4 children, and we have a **2-3-4 tree**. In practice, though, as mentioned above, much larger values of t are used.
