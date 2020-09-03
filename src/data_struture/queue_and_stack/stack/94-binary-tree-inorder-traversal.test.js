import { createTreeNode } from './../../../utils/tree'

import { inorderTraversal, inorderTraversal_bfs, inorderTraversal_dfs, inorderTraversal_dfs_dc } from './94-binary-tree-inorder-traversal'

const example = [
  [createTreeNode([1, null, 2, 3]), [1, 3, 2]],
  [createTreeNode([1, 6, 2, 3, 4, 5]), [3, 6, 4, 1, 5, 2]],
  [createTreeNode([1, 6, null, 2, 3, 4, 5, null, 1, 2]), [2, 4, 2, 5, 6, 3, 1, 1]]
]

describe('94-binary-tree-inorder-traversal', () => {
  it('inorderTraversal', () => {
    example.forEach(item => {
      expect(inorderTraversal(item[0])).toEqual(item[1])
    })
  })
  it('inorderTraversal_bfs', () => {
    example.forEach(item => {
      expect(inorderTraversal_bfs(item[0])).toEqual(item[1])
    })
  })
  it('inorderTraversal_dfs', () => {
    example.forEach(item => {
      expect(inorderTraversal_dfs(item[0])).toEqual(item[1])
    })
  })
  it('inorderTraversal_dfs_dc', () => {
    example.forEach(item => {
      expect(inorderTraversal_dfs_dc(item[0])).toEqual(item[1])
    })
  })
})
