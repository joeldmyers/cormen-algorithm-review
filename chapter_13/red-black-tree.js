class RedBlackTreeNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.color = "RED"; // "RED" or "BLACK" (obviously can be "r" or "b")
  }
}

class RedBlackTree {
  constructor() {
    this.root = null;
  }

  /**
   * Local operation to preserve binary-search-tree property and the red-black tree constraints
   * When we do a left rotation on a node localRoot, we assume its right child is not null.
   */

  leftRotate(originalLocalRoot) {
    // Get the first local right node. This will become the new local root.
    const firstLocalRightNode = originalLocalRoot.right;

    // Make the first local right node's left subtree the right subtree of the original local root
    originalLocalRoot.right = firstLocalRightNode.left;

    // Update the parent for the left node of the first local right node to be the original local root
    if (firstLocalRightNode.left !== null) {
      firstLocalRightNode.left.parent = originalLocalRoot;
    }

    // Make the first local right node's parent the original node's parent
    firstLocalRightNode.parent = originalLocalRoot.parent;

    // If the original local root's parent is null, then we are at the top
    // and can define the BST's root as the first local right parent
    if (originalLocalRoot.parent === null) {
      this.root = firstLocalRightNode;
    } else if (originalLocalRoot === originalLocalRoot.parent.left) {
      // If it was on the left side, make the parent's left node firstLocalRightNode
      originalLocalRoot.parent.left = firstLocalRightNode;
    } else {
      originalLocalRoot.parent.right = firstLocalRightNode;
    }
    // Make the original node the left node of the new local root
    firstLocalRightNode.left = originalLocalRoot;

    // Set the parent node of the original local root to be the previously first local right node
    // which is now the new local root.
    originalLocalRoot.parent = firstLocalRightNode;
  }

  // This assumes that there is an originalLocalRoot.left
  rightRotate(originalLocalRoot) {
    // This will become the new local root
    const firstLocalLeftNode = originalLocalRoot.left;
    // Make the first local left node's subtree the right subtree
    originalLocalRoot.left = firstLocalLeftNode.right;

    // Set parent correctly
    if (firstLocalLeftNode.right !== null) {
      firstLocalLeftNode.right.parent = originalLocalRoot;
    }

    // Make the first local left node's parent the original node's parent
    firstLocalLeftNode.parent = originalLocalRoot.parent;

    // If the original local root's parent is null, then we are at the top
    // and can define the BST's root as the first local left parent
    if (originalLocalRoot.parent === null) {
      this.root = firstLocalLeftNode;
    } else if (originalLocalRoot === originalLocalRoot.parent.left) {
      // If it was on the left side, make the parent's left node firstLocalLeftNode
      originalLocalRoot.parent.left = firstLocalLeftNode;
    } else {
      originalLocalRoot.parent.right = firstLocalLeftNode;
    }
    // Make the original node the right node of the new local root
    firstLocalLeftNode.right = originalLocalRoot;

    // Set the parent node of the original local root to be the previously first local left node
    // which is now the new local root.
    originalLocalRoot.parent = firstLocalLeftNode;
  }

  /**
   * Insertion takes place in log n time
  /* Note that in CLRS it uses a single sentinel to represent all null values to save space.
  /* if time, i could come back and implement it with that; it's fairly trivial.
  */

  insertion(newNodeValue) {
    const newNode = new RedBlackTreeNode(newNodeValue);
    let previousNode = null;
    let currentNode = this.root;

    // find the right place for the new node
    while (currentNode) {
      previousNode = currentNode;
      if (newNodeValue < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    newNode.parent = previousNode;

    if (previousNode.value === null) {
      this.root = newNode;
    } else if (newNode.value < previousNode.value) {
      previousNode.left = newNode;
    } else {
      previousNode.right = newNode;
    }
    /**
     * Because coloring the new node red (which happens in the constructor above)
     * may violate one of the red-black properties,
     * we have to run this helper method to fix it up in the various circumstances
     */
    this.rbInsertFixup(newNode);
  }

  findMinimum(node = this.root) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  rbInsertFixup(currentNode) {
    while (currentNode.parent.color === "RED") {
      // if the current node's parent is the left node of its (the current node's parent's) parent
      if (currentNode.parent === currentNode.parent.parent.left) {
        const currentUncle = currentNode.parent.parent.right;
        if (currentUncle.color === "RED") {
          currentNode.parent.color = "BLACK";
          currentUncle.color = "BLACK";
          currentNode.parent.parent.color = "RED";
          currentNode = currentNode.parent.parent;
        }
        // if currentNode is the right child of its parent
        else if (currentNode === currrentNode.parent.right) {
          currentNode = currentNode.parent;
          this.leftRotate(currentNode);
          currentNode.parent.color = "BLACK";
          currentNode.parent.parent.color = "RED";
          this.rightRotate(currentNode.parent.parent);
        }
      } else {
        const currentUncle = currentNode.parent.parent.left;
        if (currentUncle.color === "RED") {
          currentNode.parent.color = "BLACK";
          currentUncle.color = "BLACK";
          currentNode.parent.parent.color = "RED";
          currentNode = currentNode.parent.parent;
        }
        // if currentNode is the left child of its parent
        else if (currentNode === currrentNode.parent.left) {
          currentNode = currentNode.parent;
          this.rightRotate(currentNode);
          currentNode.parent.color = "BLACK";
          currentNode.parent.parent.color = "RED";
          this.leftRotate(currentNode.parent.parent);
        }
      }
      this.root.color = black;
    }
  }

  rbTransplant(node1, node2) {
    if (node1.parent === null) {
      this.root = node2;
    } else if (node1 === node1.parent.left) {
      node1.parent.left = node2;
    } else {
      node1.parent.right = node2;
    }
    node2.parent = node1.parent;
  }

  rbDelete(nodeToDelete) {
    let currentNode = nodeToDelete;
    let currentNodeOriginalColor = currentNode.color;
    let nodeReplacingNodeToDelete;

    if (nodeToDelete.left === null) {
      nodeReplacingNodeToDelete = nodeToDelete.right;
      this.rbTransplant(nodeToDelete, nodeToDelete.right);
    } else if (nodeToDelete.right === null) {
      nodeReplacingNodeToDelete = nodeToDelete.left;
      this.rbTransplant(nodeToDelete, nodeToDelete.left);
    } else {
      currentNode = this.findMinimum(nodeToDelete.right);
      currentNodeOriginalColor = currentNode.color;
      nodeReplacingNodeToDelete = currentNode.right;
      if (currentNode.parent === nodeToDelete) {
        nodeReplacingNodeToDelete.parent = currentNode;
      } else {
        this.rbTransplant(currentNode, currentNode.right);
        currentNode.right = nodeToDelete.right;
        currentNode.right.parent = currentNode;
      }
      this.rbTransplant(nodeToDelete, currentNode);
      currentNode.left = nodeToDelete.left;
      currentNode.left.parent = currentNode;
      currentNode.color = nodeToDelete.color;
    }

    if (currentNodeOriginalColor === "BLACK") {
      this.rbDeleteFixup(nodeReplacingNodeToDelete);
    }
  }

  rbDeleteFixup(nodeReplacingNodeToDelete) {
    while (
      nodeReplacingNodeToDelete !== this.root &&
      nodeReplacingNodeToDelete.color === "BLACK"
    ) {
      if (nodeReplacingNodeToDelete === node.parent.left) {
        let w = nodeReplacingNodeToDelete.parent.right;

        if (w.color === "RED") {
          w.color = "BLACK";
          nodeReplacingNodeToDelete.parent.color = "RED";
          this.leftRotate(nodeReplacingNodeToDelete.parent);
          w = nodeReplacingNodeToDelete.parent.right;
        }

        if (w.left.color === "BLACK" && w.right.color === "BLACK") {
          w.color = "RED";
          nodeReplacingNodeToDelete = nodeReplacingNodeToDelete.parent;
        } else if (w.right.color === "BLACK") {
          w.left.color = "BLACK";
          w.color = "RED";
          this.rightRotate(w);
          w = nodeReplacingNodeToDelete.parent.right;
        }
        w.color = nodeReplacingNodeToDelete.parent.color;
        nodeReplacingNodeToDelete.parent.color = "BLACK";
        w.right.color = "BLACK";
        this.leftRotate(nodeReplacingNodeToDelete.parent);
        nodeReplacingNodeToDelete = this.root;
      } else {
        let w = nodeReplacingNodeToDelete.parent.left;

        if (w.color === "RED") {
          w.color = "BLACK";
          nodeReplacingNodeToDelete.parent.color = "RED";
          this.rightRotate(nodeReplacingNodeToDelete.parent);
          w = nodeReplacingNodeToDelete.parent.left;
        }

        if (w.right.color === "BLACK" && w.left.color === "BLACK") {
          w.color = "RED";
          nodeReplacingNodeToDelete = nodeReplacingNodeToDelete.parent;
        } else if (w.left.color === "BLACK") {
          w.right.color = "BLACK";
          w.color = "RED";
          this.leftRotate(w);
          w = nodeReplacingNodeToDelete.parent.left;
        }
        w.color = nodeReplacingNodeToDelete.parent.color;
        nodeReplacingNodeToDelete.parent.color = "BLACK";
        w.left.color = "BLACK";
        this.rightRotate(nodeReplacingNodeToDelete.parent);
        nodeReplacingNodeToDelete = this.root;
      }
    }
  }
}
