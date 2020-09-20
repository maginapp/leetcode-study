/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
export var maxDepth_from_top = function (root) {
  if (!root) return 0
  let depth = 0
  const dfs = (root, dep) => {
    if (depth < dep) depth = dep
    if (root.left) dfs(root.left, dep + 1)
    if (root.right) dfs(root.right, dep + 1)
  }
  dfs(root, 1)
  return depth
}

// [1, 2]
export var maxDepth_from_bottom_err = function (root) {
  if (!root) return 0
  const dfs = root => {
    if (!root.left && !root.right) return 1
    return Math.max(dfs(root.left), dfs(root.right)) + 1
  }
  return dfs(root)
}

export var maxDepth_from_bottom = function (root) {
  const dfs = root => {
    if (!root) return 0
    if (!root.left && !root.right) return 1
    return Math.max(dfs(root.left), dfs(root.right)) + 1
  }
  return dfs(root)
}

export var maxDepth_from_bottom_jianshao_if = function (root) {
  const dfs = root => {
    if (!root) return 0
    return Math.max(dfs(root.left), dfs(root.right)) + 1
  }
  return dfs(root)
}

export var maxDepth_from_bottom_sanyuan = function (root) {
  const dfs = root => {
    if (!root) return 0
    let l = dfs(root.left)
    let r = dfs(root.right)
    return (l > r ? l : r) + 1
  }
  return dfs(root)
}

// import { createTreeNode, TreeNode } from './../../../utils/tree'

// maxDepth_from_top(createTreeNode([3, 9, 20, null, null, 15, 7]))

/*
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。

示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
