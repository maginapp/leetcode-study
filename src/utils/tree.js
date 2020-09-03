/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

export function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

export const createTreeNode = arr => {
  if (!arr.length) return null
  let list = [new TreeNode(arr[0])]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === null) {
      if (2 * i + 1 <= arr.length - 1) arr.splice(2 * i + 1, 0, null, null)
      list.push(null)
      continue
    }
    const node = new TreeNode(arr[i])
    list.push(node)
    if (i % 2) {
      list[(i - 1) / 2].left = node
    } else {
      list[(i - 2) / 2].right = node
    }
  }
  return list[0]
}

// console.log(createTreeNodeNoCutNull([1, null, 3]))
// console.log(createTreeNode([1, null, 3, 4])) // 1 => 3 3 => 4
// console.log(createTreeNode([1, null, 3, 4, 5, 6, 7])) // 1 => 3 3 => 4/5  4 => 6/7
// console.log(createTreeNode([1, 2, null, 4, null, 5, 6, null, null, 7, 8, 9, null, 10])) // 1 => 2/3 2=> 4/5 3 => 5/6
