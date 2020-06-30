import { findKthLargest } from './kth-largest-element-in-an-array'

// 输入: [3,2,1,5,6,4] 和 k = 2  5

//  [3,2,3,1,2,4,5,5,6] 和 k = 4 4

const arr1 = [3, 2, 1, 5, 6, 4]
const arr2 = [3, 2, 3, 1, 2, 4, 5, 5, 6]

describe('findKthLargest - o(n^2)', () => {
  it('example-1', () => {
    expect(findKthLargest(arr1, 2)).toBe(5)
    expect(findKthLargest(arr2, 4)).toBe(4)
  })
})
