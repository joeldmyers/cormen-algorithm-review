class RedBlackTreeNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.color = "R"; // "R" or "B"
  }
}

Class RedBlackTree {

  constructor() {
    this.root = null;
  }
  
  /**
   * Local operation to preserve binary-search-tree property and the red-black tree constraints
   * When we do a left rotation on a node localRoot, we assume its right child is not null.
   */

  leftRotate(completeBST, originalLocalRoot) {
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
      completeBST.root = firstLocalRightNode;
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
  rightRotation(completeBST, originalLocalRoot) {
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
      completeBST.root = firstLocalLeftNode;
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

  // log n time
  insertion(complete)
}
