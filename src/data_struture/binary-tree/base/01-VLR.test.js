import { preorderTraversal } from './01-VLR'
import { createTreeNode } from './../../../utils/tree'

/* eslint-disable */
const example = [
  [[createTreeNode([1,2,3,4,5,6,7,8,9])], [1,2,4,8,9,5,3,6,7]],
  [[createTreeNode([1,null,2,3])], [1,2,3]],
]
/* eslint-enable */
describe('preorderTraversal test', () => {
  it('expect-preorderTraversal', () => {
    example.forEach(item => {
      expect(preorderTraversal(...item[0])).toEqual(item[1])
    })
  })
})
