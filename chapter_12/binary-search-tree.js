// Note - switching to JS because some additional type safety implementations end up
// obscuring core algorithmic concepts when reviewing.

// I'm actually also just reviewing this quickly from my other repo on BST

class BSTNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new BSTNode(value);
    } else {
      let currentNode = this.root;

      let done = false;
      while (!done) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = new BSTNode(value);
            done = true;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (!currentNode.right) {
            currentNode.right = new BSTNode(value);
            done = true;
          } else {
            (currentNode = currentNode), right;
          }
        }
      }
    }
  }

  find(value) {
    let currentNode = this.root;

    if (currentNode.value === null) return false;

    let hasFoundValue = false;

    while (currentNode && !hasFoundValue) {
      if (currentNode.value === value) {
        hasFoundValue = true;
      }

      if (currentNode.val > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    if (!hasFoundValue) return false;
    return currentNode;
  }

  BFS() {
    let result = [];
    let queue = [];

    let currentNode = this.root;
    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();

      result.push(currentNode.value);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  }

  dfsPreOrder() {
    let result = [];
    if (!this.root?.value) return [];

    const traverse = (node) => {
      result.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  dfsInOrder() {
    const result = [];
    if (!this.root?.value) return [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    if (!this.root?.value) return [];
    const result = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };

    traverse(this.root);

    return result;
  }
}
