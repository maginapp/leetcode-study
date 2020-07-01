import { findLength } from './718-maximum-length-of-repeated-subarray'

// 输入: [3,2,1,5,6,4] 和 k = 2  5

//  [3,2,3,1,2,4,5,5,6] 和 k = 4 4

const arr1 = [1, 2, 3, 2, 1]
const arr2 = [1, 3, 5, 3, 2, 1, 2, 4, 7]

const A = [3, 2, 1, 4, 7]
const B = [1, 2, 3, 2, 1]

const A1 = [0, 0, 0, 0, 0]
const B1 = [0, 0, 0, 0, 0]

const arr3 = [1, 0, 0, 0, 1]
const arr4 = [1, 0, 0, 1, 1]

describe('findLength', () => {
  it('example-1', () => {
    expect(findLength(arr1, arr2)).toBe(3)
    expect(findLength(A, B)).toBe(3)
    expect(findLength(A1, B1)).toBe(5)
    expect(findLength(arr3, arr4)).toBe(3)
  })
})
