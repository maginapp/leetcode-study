import { createTreeNode, TreeNode } from './../../../utils/tree'
import { maxDepth_from_top, maxDepth_from_bottom, maxDepth_from_bottom_jianshao_if, maxDepth_from_bottom_sanyuan } from './01-104-maximum-depth-of-binary-tree'

/* eslint-disable */
const example = [
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([3,9,20,null,null,15,7])], 3],
  [[createTreeNode([3,9,20])], 2],
  [[createTreeNode([1,2])], 2]
]
/* eslint-enable */
describe('01-104-maximum-depth-of-binary-tree test', () => {
  it('expect-maxDepth_from_top', () => {
    example.forEach(item => {
      expect(maxDepth_from_top(...item[0])).toEqual(item[1])
    })
  })
  it('expect-maxDepth_from_bottom', () => {
    example.forEach(item => {
      expect(maxDepth_from_bottom(...item[0])).toEqual(item[1])
    })
  })
  it('expect-maxDepth_from_bottom_jianshao_if', () => {
    example.forEach(item => {
      expect(maxDepth_from_bottom_jianshao_if(...item[0])).toEqual(item[1])
    })
  })
  it('expect-maxDepth_from_bottom_sanyuan', () => {
    example.forEach(item => {
      expect(maxDepth_from_bottom_sanyuan(...item[0])).toEqual(item[1])
    })
  })
})
