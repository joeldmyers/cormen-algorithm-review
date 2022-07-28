class RedBlackTreeNode {
  constructor(value, parent = null) {
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
    this.color = "R"; // "R" or "B"
  }

  /**
   * Local operation to preserve binary-search-tree property and the red-black tree constraints
   * When we do a left rotation on a node localRoot, we assume its right child is not null.
   */

  leftRotate(completeBST, originalLocalRoot) {
    // this will become the new local root
    const firstLocalRightNode = originalLocalRoot.right;
    // make the first local right node's subtree the right subtree
    originalLocalRoot.right = firstLocalRightNode.left;
    // set parent correctly
    if (firstLocalRightNode.left !== null) {
      firstLocalRightNode.left.parent = originalLocalRoot;
    }

    firstLocalRightNode.parent = originalLocalRoot.parent;

    if (originalLocalRoot.parent === null) {
      completeBST.root = firstLocalRightNode;
    } else if (originalLocalRoot === originalLocalRoot.parent.left) {
      // if it was on the left side, make the parent's left node firstLocalRightNode
      originalLocalRoot.parent.left = firstLocalRightNode;
    } else {
      originalLocalRoot.parent.right = firstLocalRightNode;
    }
    // make the original node the left node of the new local root
    firstLocalRightNode.left = originalLocalRoot;

    // set the parent node of the original local root to be the previously first local right node
    // which is now the new local root.
    originalLocalRoot.parent = firstLocalRightNode;
  }
}
