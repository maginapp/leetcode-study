import { createTreeNode } from './../../utils/tree'

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
export var inorderTraversal = function (root) {
  if (!root) return []
  const stack = [root]
  const list = []
  while (stack.length) {
    const node = stack.pop()
    if (node !== undefined && !node.left && !node.right) {
      list.push(node.val !== undefined ? node.val : node)
      continue
    }
    if (node && node.right) {
      stack.push(node.right)
    }
    stack.push(node.val)
    if (node && node.left) {
      stack.push(node.left)
    }
  }
  return list
}

// inorderTraversal(createTreeNode([1, null, 0, 3]))

export var inorderTraversal_dfs = function (root) {
  if (!root) return []
  let list = []
  const dfs = node => {
    if (node && node.left) {
      dfs(node.left)
    }
    list.push(node.val)
    // if (node && node.val) list.push(node.val) // success
    if (node && node.right) {
      dfs(node.right)
    }
  }
  dfs(root)
  return list
}

export var inorderTraversal_err_with_falseData = function (root) {
  if (!root) return []
  const stack = [root]
  const list = []
  while (stack.length) {
    const node = stack.pop()
    if (node && !node.left && !node.right) {
      list.push(node.val ? node.val : node)
      continue
    }
    if (node && node.right) {
      stack.push(node.right)
    }
    stack.push(node.val)
    if (node && node.left) {
      stack.push(node.left)
    }
  }
  return list
}
