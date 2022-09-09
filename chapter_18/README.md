# B-Trees

## Overview

B-trees are balanced search trees designed to work well on disks or other direct-access storage devices. They're self-balancing, like red-black trees or AVL trees, but they're better for minimizing disk I/O operations, since I/O with secondary storage on magnetic disks is much slower than I/O with primary memory (silicon memory chips, i.e., RAM).

B-trees generalize binary search trees in a natural manner. If an internal B-tree node x contains x.n keys, then x has x.n + 1 children. Basically a single node contains a subrange, which can be potentially a lot of data. This helps because getting the read/write head in the right place to get data from the plattter is slow.
