import { kthSmallest } from './378-kth-smallest-element-in-a-sorted-matrix'

/* matrix = [
   [ 1,  5,  9],
   [10, 11, 13],
   [12, 13, 15]
],
k = 8, 13

[[1,2],[1,3]] 2 1
 */

const list = [
  [
    [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15]
    ],
    8,
    13
  ],
  [
    [
      [1, 5, 9, 11],
      [5, 11, 12, 13],
      [11, 12, 13, 15],
      [11, 12, 18, 30]
    ],
    12,
    13
  ],
  [
    [
      [1, 2],
      [1, 3]
    ],
    2,
    1
  ],
  [
    [
      [1, 2],
      [3, 3]
    ],
    2,
    2
  ]
]

describe('kthSmallest-test', () => {
  for (let i = 0; i < list.length; i++) {
    it('kthSmallest' + 'list' + (i + 1), () => {
      expect(kthSmallest(list[i][0], list[i][1])).toBe(list[i][2])
    })
  }
})
