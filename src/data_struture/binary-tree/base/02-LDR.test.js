import { createTreeNode } from './../../../utils/tree'
import { inorderTraversal, inorderTraversal_dfs } from './02-LDR'

/* eslint-disable */
const example = [
  [[createTreeNode([1,2,3,4,5,6,7,8,9])], [8,4,9,2,5,1,6,3,7]],
  [[createTreeNode([1,null,2,3])], [1,3,2]],
  [[createTreeNode([1,null,0,3])], [1,3,0]]
]
/* eslint-enable */
describe('inorderTraversal test', () => {
  it('expect-inorderTraversal', () => {
    example.forEach(item => {
      expect(inorderTraversal(...item[0])).toEqual(item[1])
    })
  })
  it('expect-inorderTraversal_dfs', () => {
    example.forEach(item => {
      expect(inorderTraversal_dfs(...item[0])).toEqual(item[1])
    })
  })
})
