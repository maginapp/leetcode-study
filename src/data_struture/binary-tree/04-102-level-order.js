/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
export var levelOrder = function (root) {
  if (!root) return []
  const queue = [root]
  let size,
    node,
    list = []
  while (queue.length) {
    size = queue.length
    const level = []
    for (let i = 0; i < size; i++) {
      node = queue.shift()
      level.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    list.push(level)
  }
  return list
}

// import { createTreeNode } from './../../utils/tree'
// levelOrder(createTreeNode([3, 9, 20, null, null, 15, 7]))
