/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
export var postorderTraversal_dfs = function (root) {
  if (!root) return []
  const list = []
  const dfs = node => {
    if (node.left) dfs(node.left)
    if (node.right) dfs(node.right)
    list.push(node.val)
  }
  dfs(root)
  return list
}

export var postorderTraversal_stack = function (root) {
  if (!root) return []
  const list = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    if (node !== undefined && !node.left && !node.right) {
      list.push(node.val !== undefined ? node.val : node)
      continue
    }
    stack.push(node.val)
    if (node && node.right) {
      stack.push(node.right)
    }
    if (node && node.left) {
      stack.push(node.left)
    }
  }
  return list
}
