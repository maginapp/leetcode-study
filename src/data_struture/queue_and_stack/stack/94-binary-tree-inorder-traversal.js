// import { TreeNode } from './../../utils/tree'

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
// 问题 每个都新建数组和合并数组 消耗过大
export var inorderTraversal = function (root) {
  const arr = []
  const dfs = root => {
    if (!root) return []
    return [...dfs(root.left), root.val, ...dfs(root.right)]
  }
  arr.push(...dfs(root))
  return arr
}

export const inorderTraversal_bfs = root => {
  if (!root) return []
  let stack = [root]
  let count = 1
  while (stack.length && count) {
    count = 0
    let arr = []
    for (let i = 0; i < stack.length; i++) {
      if (typeof stack[i] != 'object') {
        arr.push(stack[i])
        continue
      }
      if (stack[i].left) {
        arr.push(stack[i].left)
        count++
      }
      arr.push(stack[i].val)
      if (stack[i].right) {
        arr.push(stack[i].right)
        count++
      }
    }
    stack = arr
  }
  return stack
}

export const inorderTraversal_dfs = root => {
  const arr = []
  const dfs = root => {
    root.left && dfs(root.left)
    arr.push(root.val)
    root.right && dfs(root.right)
  }
  root && dfs(root)
  return arr
}

export const inorderTraversal_dfs_dc = root => {
  const nums = []
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const root = stack.pop()
    if (root) {
      root.right && stack.push(root.right)
      stack.push(root)
      stack.push(null)
      root.left && stack.push(root.left)
    } else {
      nums.push(stack.pop().val)
    }
  }
  return nums
}

/*
给定一个二叉树，返回它的中序 遍历。

示例:

输入: [1,null,2,3]

输出: [1,3,2]
   1
    \
     2
    / \
   3   4
  / 
  5
  [1,6,2,3, 4, 5]

    1
   / \
   6  2
/ \   /
3  4 5

3 6 4 1 5 2


进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
