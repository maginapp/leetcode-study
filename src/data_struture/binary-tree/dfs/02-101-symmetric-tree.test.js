import { createTreeNode, TreeNode } from './../../../utils/tree'
import { isSymmetric } from './02-101-symmetric-tree'

/* eslint-disable */
const example = [
  [[createTreeNode([1,2,2,3,4,4,3])], true],
  [[createTreeNode([1,null, 3])], false],
  [[createTreeNode([[1,2, 3, 4, 5]])], false],
  [[createTreeNode([1,2,2,3,null,null, 4])], false],
  [[createTreeNode([1,2,2,3,null,null, 3])], true]
]
/* eslint-enable */
describe('02-101-symmetric-tree test', () => {
  it('expect-isSymmetric', () => {
    example.forEach(item => {
      expect(isSymmetric(...item[0])).toEqual(item[1])
    })
  })
})
