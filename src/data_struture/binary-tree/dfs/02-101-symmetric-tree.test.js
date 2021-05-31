import { createTreeNode, TreeNode } from './../../../utils/tree'
import { isSymmetric, isSymmetric_dfs, isSymmetric_dfs_no_var } from './02-101-symmetric-tree'

/* eslint-disable */
const example = [
  [[createTreeNode([1,2,2,3,4,4,3])], true],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([1,2, 3, 4, 5])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([1,2, 3, 4, 5])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([1,2, 3, 4, 5])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([1,2,2,3,4,4,3])], true],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([1,2, 3, 4, 5])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([1,2, 3, 4, 5])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1,2, 3, 4, 5])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false],
  [[createTreeNode([])], true],
  [[createTreeNode([1, null, 0])], false],
  [[createTreeNode([1, '', 0])], false],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5])], true],
  [[createTreeNode([1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 6, 6, 5, 5, 5, 5])], false]
]
/* eslint-enable */
describe('02-101-symmetric-tree test', () => {
  it('expect-isSymmetric', () => {
    example.forEach(item => {
      expect(isSymmetric(...item[0])).toEqual(item[1])
    })
  })
  it('expect-isSymmetric_dfs', () => {
    example.forEach(item => {
      expect(isSymmetric_dfs(...item[0])).toEqual(item[1])
    })
  })
  it('expect-isSymmetric_dfs_no_var', () => {
    example.forEach(item => {
      expect(isSymmetric_dfs_no_var(...item[0])).toEqual(item[1])
    })
  })
})

// example.forEach(item => {
//   describe('02-101-symmetric-tree test', () => {
//     it('expect-isSymmetric_dfs', () => {
//       expect(isSymmetric_dfs(...item[0])).toEqual(item[1])
//     })
//   })
// })
