/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
export var isSymmetric = function (root) {
  if (!root) return true
  const queue = [root]
  let symmetric = true
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (node) {
        queue.push(node.left)
        queue.push(node.right)
      }
    }
    size = queue.length
    for (let i = 0; i < size / 2; i++) {
      let header = queue[i]
      let tail = queue[size - 1 - i]
      if (!((!header && !tail) || (header && tail && header.val === tail.val))) {
        symmetric = false
        break
      }
    }
    if (!symmetric) break
  }
  return symmetric
}

// 思路更改 同时考虑两个

export var isSymmetric_dfs = function (root) {
  if (!root) return true
  let symmetric = true
  const dfs = (leftTree, rightTree) => {
    if (!symmetric) return
    if (!leftTree && !rightTree) return
    if (leftTree && rightTree && leftTree.val === rightTree.val) {
      dfs(leftTree.left, rightTree.right)
      dfs(leftTree.right, rightTree.left)
    } else {
      symmetric = false
    }
  }
  dfs(root.left, root.right)
  return symmetric
}

export var isSymmetric_dfs_no_var = function (root) {
  if (!root) return true
  const dfs = (leftTree, rightTree) => {
    if (leftTree === null && rightTree === null) return true
    if (leftTree && rightTree && leftTree.val === rightTree.val) {
      return dfs(leftTree.left, rightTree.right) && dfs(leftTree.right, rightTree.left)
    }
    return false
  }
  return dfs(root.left, root.right)
}

export var isSymmetric_bfs = root => {
  if (!root) return true
  const queue = [root.left, root.right]
  while (queue.length) {}
}

// import { createTreeNode, TreeNode } from './../../../utils/tree'
// isSymmetric_dfs(createTreeNode([1, '', 0]))
/*
给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 
   1       1
  / \     /
 2   3   2
        /
       3

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/symmetric-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
