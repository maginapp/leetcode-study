import { numSquares, numSquares_104_43, numSquares_MuYunyun } from './279-perfect-squares'

const list = [
  [8935, 4],
  [7591, 4],
  [6352, 2],
  [6358, 3],
  [12, 3],
  [13, 2],
  [18, 2],
  [37, 2],
  [1, 1],
  [2, 2],
  [3, 3]
]

describe('numSquares-test', () => {
  // list.forEach(item => {
  //   it('numSquares | ' + item[0] + ' | ' + item[1], () => {
  //     expect(numSquares(item[0])).toEqual(item[1])
  //   })
  // })
  // list.forEach(item => {
  //   it('numSquares_104_43 | ' + item[0] + ' | ' + item[1], () => {
  //     expect(numSquares_104_43(item[0])).toEqual(item[1])
  //   })
  // })

  it('numSquares', () => {
    list.forEach(item => {
      expect(numSquares(item[0])).toEqual(item[1])
    })
  })
  it('numSquares_104_43', () => {
    list.forEach(item => {
      expect(numSquares_104_43(item[0])).toEqual(item[1])
    })
  })
  it('numSquares_MuYunyun', () => {
    list.forEach(item => {
      expect(numSquares_MuYunyun(item[0])).toEqual(item[1])
    })
  })
})
