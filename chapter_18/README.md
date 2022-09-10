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

## Operations we want to support

### Search

Like binary search tree, except instead of making a binary or two-way branching decision at each node, we make a multi-way branching decision. bTreeSearch takes a pointer to the root node of a subtree and a key to be searched for. So it's bTreeSearch(T.root, k). If it finds it, it returns [y, i], which is a node y and an index i, such that y.key[i] = k. Otherwise it returns null.

```
const bTreeSearch = (x, target) => {
  let i = 0;

  while (i <= x.n && k > x.key[i]) {
    i++;
  }

  if (i <= x.n && k === x.key[i]) {
    return [x, i];
  } else if (x.leaf) return null;
  else {
    diskRead(x.c[i]);
      return bTreaSearch(x.c[i], k);
  }
}
```

This uses a linear search procedure to find the smallest index i so that k <= x.key[i].

It returns it if it finds it. If x is a leaf say we didn't find it.

Otherwise, do a disk read on x.c[i] and then recursively call bTreeSearch on it.

### Create an empty B-tree

```
const bTreeCreate = (T) => {
  const x = allocateNode(0);

  x.leaf = true;

  x.n = 0;
  diskWrite(x);
  T.root = x;
  }
```

### Inserting a key into a B-tree

We have to figure out where to insert it. We also have to make sure to maintain the b-tree properties. To do this, we will have to split a full node (in the event that it's full and we want to insert into it) around its median key, into two nodes having only t - 1 keys each.

### Splitting a node in a B-tree

![IMG_3491](https://user-images.githubusercontent.com/4838984/189504026-8890f219-f929-44f4-b1bb-1050a5b697f9.jpg)

```
const bTreeSplitChild = (x, i) => {
  const z = allocateNode();
  const y = x.c[i];
  z.leaf = y.leaf;
  z.n = t - 1;
  for (let j = 1; j < t; j++) {
    z.key[j] = y.key[j + t]
  }

  if (!y.leaf) {
    for (let j = 1; j <= t; j++) {
      z.c[j] = y.c[j + t];
    }
  }

  y.n = t - 1;

  for (let j = x.n + 1; j > i; j--) {
    x.c[j + 1] = x.c[j];
  }

  x.key[i] = y.key[t];
  x.n++;
  diskWrite(y);
  diskWrite(z);
  diskWrite(x);
}
```

Intuitively, x is the parent of the node being split. y is x's ith child. node y originally has 2t children, but is reduced to t children by this operation. node z is the new node; it takes the t largest children from y, and it becomes a new child of x. the median of y moves up to become the key in x that separates y and z.

### Inserting a key in a B tree in a single pass down the tree

```
const bTreeInsert = (T, k) => {
  const root = T.root;

  if (root.n === 2t - 1) {
    const s = allocateNode();
    T.root = s;
    s.leaf = false;
    s.n = 0;
    s.c[1] = r;
    bTreeSplitCild(s, 1);
    bTreeInsertNonfull(s, k);
  }
  else {
    bTreeInsertNonFull(r, k)
  }
}
```

Last method needed:

```
const bTreeInsertNonFull = (x, k) => {
  const i = x.n;
  if (x.leaf) {
    while (i >= 1 && k < x.key) {
      x.key[i + 1] = x.key[i];
      i--;
    }

    x.key[i + 1] = k;
    x.n++
    diskWrite(x);
  }
  else {
    while (i >= 1 && k < x.key[i]) {
      i--;
    }
    i++;
    diskRead(x.c[i]);
    if(x.c[i].n === 2t - 1) {
      bTreeSplitChild(x, i);

      if (k > x.key[i]) {
        i++;
      }
      bTreeInsertNonFull(x.c[i], k);
    }
  }
}
```
