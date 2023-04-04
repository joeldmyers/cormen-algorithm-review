# Elementary Graph Algorithms

## Representations of graphs

There are two ways to representa graph: a collection of adjacency lists or an adjacency matrix. (Note, separately from this Cormen review, I have an implementation for an unweighted adjacency list matrix [https://github.com/joeldmyers/data-structure-implementation-review/blob/main/graph/graph.ts](here)).

Adjacency lists are good for **sparsely connected** graphs (the book says E is much less than V^2, what this means is that each node isn't massively connected to all the other nodes). This is usually what is preferred, and most algorithms covered in the book use adjacency lists. Adjacency matrix representations are useful when the graph is **dense** (each vertex is very close to being connected with each other vertex)

![IMG_4712 (1)](https://user-images.githubusercontent.com/4838984/207054877-153028a5-6dd8-4b7f-a679-10ce5ecf4897.jpg)

If G is a directed graph, the sum of the lengths of all the adjacency lists is |E| (the edge appears only once). If it's undirected, it's 2|E| since each vertex has the connection to the other.

The memory requirements of an adjacency list matrix is Theta(V + E).

## Weighted Graphs

We can store the weight in the adjacency list. For ex:

```
adjacencyList[someVertexA] = [{ node: someVertexB, weight: 5 }];
```

The one down side is that with adjacency lists, the only way to know if an edge (u, v) is present in a graph is to search for v in the adjacency list u. An adjacency matrix makes this much easier, but at the cost of much more memory.

An adjacency matrix requires Theta(V^2) memory.

## Breadth-first search (BFS)

Important for many graph algorithms. Prim's minimum-spanning tree algorithm, and Dijkstra's algorithm use ideas similar to BFS.

Given a graph G and a distinguished source vertex s, BFS systematically explores the edges of G to "discover" every vertex reachable from s. It computes the distance from s to each reachable vertex. It also produces a "breadth-first tree" with root s that contains all reachable vertices. For any vertex v reachable from s, the simple path in the breadth-first tree from s to v corresponds to a "shortest path" from s to v in G -- that is, a path containing the smallest number of edges.

BFS is so named because it expands the frontier between discovered and undiscovered vertices uniformly across the breadth of the frontier. That is, it discoveres all vertices at distance k from s before discovering any vertices at k + 1.

CLRS uses gray and black to keep track. Black means all adjacent nodes have been visited. Gray means there are some unvisited nodes.

The algorithm assumes we're using an adjacency list.

d = distance.
u = current node.
pi = current node's predecessor.

```
const bfs = (G, s) => {
  for (const currentVertex in G) {
    currentVertex.color = white;
    currentVertex.d = Number.INFINITY;
    currentVertex.pi = nil
  }

  const queue = [s];

  while (queue.length) {
    const currentVertex = queue.shift();
    for (const v of currentVertex.adjacencyList) {
      if (v.color === white) {
        // this color thing is in place of the more normal 'visited' notation
        v.color = gray;
        v.d = u.d + 1;
        v.pi = u;
        queue.push(v);
      }
    }
    u.color = black;
  }
}
```

The first part "paints" every vertex white, sets each vertex's distance to infinity, and its predecessor (parent) to be nil.

It then begins by painting the first node s gray, the distance from s to be 0 and its parent to be nil.

It then initializes a queue (Q in the book) with the node s in it.

The while loop then traverses the graph. It dequeues a single node, and then does a foreach over each of the nodes in its adjacency list. If the node's color is white, this sets it to gray. This is similar to other algorithms that use the concept of visited.

Note that this algorithm doesn't actually store the results anywhere. Usually one might have a result array. There is an example of a more common way to do this in my code here: https://github.com/joeldmyers/data-structure-implementation-review/blob/main/graph/graph.ts

This operation is O of (V + E)

BFS can be used to get the shortest path in an unweighted graph.

The implementation above creates a breadth-first tree due to the predecessor linking.

## Depth-first Search (DFS)

This searches "deeper" in the graph whenever possible, and then backtracks and restarts the same process until it has discovered every vertex.

Like with BFS, when DFS discoveres a vertex, it records a predecessor. In Cormen, they use colors, gray to indicate visited and black to indicate that all vertices in its adjacency list have been visited.

Pseudocode here:

```
const dfs = (G) => {
  for (const vertex in G.adjacencyList) {
    vertex.color = 'WHITE';
    // this was named pi in the book.
    vertex.predecessor = null;
  }

  let time =0;

  for (const vertex in G.adjacencyList) {
    if (vertex.color === 'WHITE') {
      dfsVisit(G, vertex);
    }
  }
}

const dfsVisit = (G, u) => {
  time++;
  // discovery time
  u.d = time;
  u.color = 'GRAY';

  for (const v of G.adjacencyList[u]) {
    if (v.color === 'WHITE') {
      v.predecessor = u;
      dfsVisit(G, v);
    }
  }

  u.color = 'BLACK';
  time++;
  // finish time
  u.f = time;
}
```

Runtime is same as BFS: O of (V + E)

### Classification of edges

This can be used to classify edges of graph. This can be helpful. For example, a directed graph is acyclic if and only if a DFS yields no "back" edges. Below are the four edge types in terms of a DFS forest:

1. Tree edges. Edges in the DFS forest G[predecessor]. This means a tree edge E(u, v) is a tree edge if v was first discovered by exploring the edge (u, v).

2. Back edges - connecting a vertex u to an ancestor v in a depth-first tree. Self-loops are considered back edges.

3. Forward edges. Non-tree edges connecting a vertex u to a descendant v in a depth-first tree.

4. Cross edges are all other edges.

The DFS algorithm above has information on this. When we first explore an edge, the color tells us something about that edge:

1. White indicates a tree edge

2. Gray indicates a back edge

3. Black indicates a forward or cross edge.

## Topological sort

Definition: Topological sort of a dag (directed acyclic graph) G = (V, E) is a linear ordering of all its vertices such that if G contains an edge (u, v), then u appears before v in that ordering. If the graph contains a cycle, then no linear ordering is possible.

This is a way of ordering certain things that need to happen before other certain things. Class prereqs are an example. The book uses clothes (socks must be put on before shoes).

A directed edge (u, v) indicates that, in the clothing example above, garment u must be donned before garment v. The top sort of this dag therefore gives an order for getting dressed.

The following is the algorithm for top sort:

```
const topologicalSort = (G) => {
  // Call DFS(G) to compute finishing times v.f for each vertex v
  // As each vertex is finished, insert it onto the front of a linked list.
  // Return the linked list of vertices
}
```
