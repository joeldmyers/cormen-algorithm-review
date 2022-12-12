## Elementary Graph Algorithms

### Representations of graphs

There are two ways to representa graph: a collection of adjacency lists or an adjacency matrix. (Note, separately from this Cormen review, I have an implementation for an unweighted adjacency list matrix [https://github.com/joeldmyers/data-structure-implementation-review/blob/main/graph/graph.ts](here)).

Adjacency lists are good for **sparsely connected** graphs (the book says E is much less than V^2, what this means is that each node isn't massively connected to all the other nodes). This is usually what is preferred, and most algorithms covered in the book use adjacency lists. Adjacency matrix representations are useful when the graph is **dense** (each vertex is very close to being connected with each other vertex)

![IMG_4712 (1)](https://user-images.githubusercontent.com/4838984/207054877-153028a5-6dd8-4b7f-a679-10ce5ecf4897.jpg)

If G is a directed graph, the sum of the lengths of all the adjacency lists is |E| (the edge appears only once). If it's undirected, it's 2|E| since each vertex has the connection to the other.

The memory requirements of an adjacency list matrix is Theta(V + E).

### Weighted Graphs

We can store the weight in the adjacency list. For ex:

```
adjacencyList[someVertexA] = [{ node: someVertexB, weight: 5 }];
```

The one down side is that with adjacency lists, the only way to know if an edge (u, v) is present in a graph is to search for v in the adjacency list u. An adjacency matrix makes this much easier, but at the cost of much more memory.
