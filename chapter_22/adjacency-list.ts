// Doing this from memory before reviewing CLRS implementation

class Graph {
  adjacencyList: Record<string, string[]>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string): void {
    this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string): void {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
}
