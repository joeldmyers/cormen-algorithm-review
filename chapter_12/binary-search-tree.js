// Note - switching to JS because some additional type safety implementations end up
// obscuring core algorithmic concepts when reviewing.

// I'm actually also just reviewing this quickly from my other repo on BST

class BSTNode {
  constructor(value, parent = null) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent =  parent;
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
      let currentParent = null;

      let done = false;
      while (!done) {
        currentParent = currentNode;
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = new BSTNode(value, currentParent));
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

  findRecursive(node = this.root, value) {
    if (!node?.value) return null;
    if (node.value === value) return node;
    if (value < node.value) {
      return this.findRecursive(node.left);
    } else {
      this.findRecursive(node.right);
    }
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

  findMinimum(node = this.root) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  findMinimumRecursive(node = this.root) {
    if (node.left !== null) {
      return this.findMinimumRecursive(node.left);
    }
    return node;
  }

  findMaximum(node = this.root) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  findMaximumRecursive(node = this.root) {
    if (node.right !== null) {
      return this.findMaximumRecursive(node.right);
    }
    return node;
  }

  findSuccessor(currentNode) {
    if (currentNode.right !== null) {
      return this.findMinimum(currentNode.right);
    }
    let higherNode = currentNode.parent;
    while (higherNode !== null && currentNode === higherNode.right) {
      // if the (original) currentNode is the right child of the parent, keep going up
      currentNode = higherNode;
      higherNode = higherNode.parent;
    }
    return higherNode;
  }

  findPredecessor(currentNode) {
    if (currentNode.left !== null) {
      return this.findMaximum(currentNode.left);
    }
    let higherNode = currentNode.parent;
    while (higherNode !== null && currentNode === higherNode.left) {
      currentNode = higherNode;
      higherNode = higherNode.parent;
    }
    return higherNode;
  }
}
