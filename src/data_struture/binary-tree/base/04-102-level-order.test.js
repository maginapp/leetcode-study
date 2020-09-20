import { createTreeNode } from './../../../utils/tree'
import { levelOrder } from './04-102-level-order'

/* eslint-disable */
const example = [
  [[createTreeNode([3,9,20,null,null,15,7])], [[3],[9,20],[15,7]]],
  [[createTreeNode([1,2,3,null,4,null,5,6,7,8,null,9,10,11])], [[1],[2,3],[4,5],[6,7,8],[9,10,11]]]
]
/* eslint-enable */
describe('04-102-level-order test', () => {
  it('expect-levelOrder', () => {
    example.forEach(item => {
      expect(levelOrder(...item[0])).toEqual(item[1])
    })
  })
})
