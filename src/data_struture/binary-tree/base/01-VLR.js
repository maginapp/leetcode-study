// import { createTreeNode } from './../../utils/tree'
// const a = createTreeNode([1, 2, 3, 4, 5, 6, 7, 8, 9])
// console.log(a)
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export var preorderTraversal = function (root) {
  if (!root) return []
  const stack = [root]
  const list = []
  while (stack.length) {
    const node = stack.pop()
    list.push(node.val)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }
  return list
}
