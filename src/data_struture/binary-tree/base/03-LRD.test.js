import { createTreeNode } from './../../../utils/tree'
import { postorderTraversal_stack, postorderTraversal_dfs } from './03-LRD'

/* eslint-disable */
const example = [
  [[createTreeNode([1,2,3,4,5,6,7,8,9])], [8,9,4,5,2,6,7,3,1]],
  [[createTreeNode([1,null,2,3])], [3,2,1]],
  [[createTreeNode([1,null,0,3])], [3,0,1]],
  [[createTreeNode([1,2,3,null,4,null,5,6,7,8,null,9,10,11])], [9,10,6,11,7,4,2,8,5,3,1]]
]
/* eslint-enable */
describe('postorderTraversal test', () => {
  it('expect-postorderTraversal_stack', () => {
    example.forEach(item => {
      expect(postorderTraversal_stack(...item[0])).toEqual(item[1])
    })
  })
  it('expect-postorderTraversal_dfs', () => {
    example.forEach(item => {
      expect(postorderTraversal_dfs(...item[0])).toEqual(item[1])
    })
  })
})
