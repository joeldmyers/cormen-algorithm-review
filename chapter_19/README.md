# Fibonacci Heaps

These do merge (union) better than binary heaps; theta 1 vs theta n. That said, due to their complexity and the fact that they're rarely needed except for certain applications that contain large amounts of data, they are mainly of theoretical interest.

## Mergeable Heaps

Any data structure that supports makeHeap, insert, minimum (pointer to minimum value), extractMin, union(H1, H2) (creates a new heap that contains all elements of heap H1 and H2).

Fibonacci heaps also support decreaseKey (assigns new key to element that's no greater than current key) and delete(H, x), which deletes element x from heap H.

If we don't need union operations, normal binary heaps work well.

Fibonacci heaps are desirable when number of extractMin and delete operations is small relative to other operations. For ex., some algorithms for graph problems may call decreaseKey once per edge. Great example of fibonacci heaps are computing minimum spanning trees (chapter 23) and finding single-source shortest paths (24).

From a practical point of view, though, these aren't used so much and are mainly of a theoretical interest.

Fibonacci heaps are represented as rooted trees.
