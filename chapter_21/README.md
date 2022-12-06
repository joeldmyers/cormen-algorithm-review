# Data Structures for Disjoint Sets

A disjoint-set data structure maintains a collection of disjoint dynamic sets. Each set is identified by a **representative**, which is some member of the set. Sometimes it doesn't matter which element is selected. Some other times there need to be rules, such as choosing the smallest member in the set (assuming they can be ordered).

We want to support the following operations:

- makeSet(x) - creates a new set whose only member is x. Since the sets are disjoint, x cannot be in any other set.

- union(x, y) - unites the dynamic sets that contain x and y, into a new set that's the union of the sets that contained x and y.

- findSet(x) - returns a pointer to the representative of the (unique) set containing x.

## Applications of Disjoint Sets

- Determining connected components of an undirected graph is one example.

For a graph G:

```
const connectedComponents = (G) => {
  for (const vertex of G.vertices) {
    makeSet(vertex);
  }

  for (const {u, v} of G.edges) {
    if (findSet(u !== findSet(v)) {
      union(u, v);
    }
  }
}

const sameComponent = (u, v) => {
  return findSet(u) === findSet(v);
}

```

## Linked List representation of disjoint sets

Each set is represented by its own linked list. (Separate from Cormen I've done this using an array). The head is the first object in the list and the tail is the last. Each object in the list contains a set member, a pointer to the next object in the list, and a pointer back to the set object.

With this, for makeSet(x) (making a brand new set with just x as the element) is easy - create a new linked list with just x in it.

For findSet, we just follow the pointer back to its set object, and then return the member that the head points to.

### A simple implementation of union

For this linked list version, we perform Union(x, y) by appending y's list onto the end of x's list. The representative of x's list becomes the representative of the whole set.

We have to update the pointer for each object in y's list after joining x's list. This takes linear time.

## Disjoint-set Forests

We can implement disjoint sets faster by using rooted trees, with each node containing one member and each tree representing one set. The root of each tree contains the representative and is its own parent. While the straightforward algorithms used by this implementation are no faster than the linked-list implementation, we can improve it by using **union by rank** and **path compression**, which can give us an asymptotically optimal disjoint-set data structure.

makeSet creates a tree with just one node. findSet follows parent pointers until we find the root of the tree. The nodes visited on this simple path toward the root constitute the **find path**. A union operation causes the root of one tree to point to the root of the other.

There is a problem with this; the worst-case can still end up being a linked list - a tree that's just a linear chain of n nodes.

The first is union by rank. We will maintain a rank for each node, which is an upper bound on the height of the node. In union by rank, we make the root with the smaller rank point to the root with the larger rank during a union operation.

Path compression means that we basically point every node in the tree to the parent.

### Rank

When there's just one node, the tree has a rank of 0. If when merging two sets using the union method, they have unequal rank, we make the root with the higher rank the parent of the root with the lower rank, but the ranks themselves remain unchanged. If they have equal ranks, we arbrirarily choose one of the roots as the parent and increment its rank.

```
const makeSet = x => {
  x.p = x;
  x.rank = 0;
}

const union = (x, y) => {
  link(findSet(x), findSet(y));
}

const link = (x, y) => {
  if (x.rank > y.rank) y.p = x;
  else {
    x.p = y;
    if (x.rank === y.rank) {
      y.rank++;
    }
  }
}

const findSet = x => {
  // if this isn't the root
  if (x !== x.p) {
    // find the root for this set.
    x.p = findSet(x.p);
  }
  return x.p;
}
```

The above findSet is a **two-pass** method. As it recurses, it makes one pass up the find path to find the root, and as it "unwinds", it makes a second pass back down the find path to update each node to point directly to the root.

With these improvements, it is essentially linear runtime. Strictly speaking though, it's n log n.
