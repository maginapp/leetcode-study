import { floodFill, floodFill_timeout } from './04-733-flood-fill'

/* eslint-disable */
const example = [
  [[[[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2], [[2,2,2],[2,2,0],[2,0,1]]],
  [[[[1,1,1],[1,1,0],[1,0,1]], 1, 2, 2], [[1,1,1],[1,1,2],[1,0,1]]],
  [[[[1,1,1,2],[1,1,0, 2],[1,0, 1,1],[0,1, 0,1],[1,2,0,1]], 1, 2, 2], [[1,1,1,2],[1,1,2,2],[1,0,1,1],[0,1,0,1],[1,2,0,1]]]
]

/* eslint-enable */
describe('04-733-flood-fill test', () => {
  it('expect-floodFill', () => {
    example.forEach(item => {
      expect(floodFill(...item[0])).toEqual(item[1])
    })
  })
  // it('expect-floodFill_timeout', () => {
  //   example.forEach(item => {
  //     expect(floodFill_timeout(...item[0])).toEqual(item[1])
  //   })
  // })
})
