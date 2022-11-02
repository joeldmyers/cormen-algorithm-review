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
