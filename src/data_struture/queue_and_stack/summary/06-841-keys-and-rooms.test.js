import { canVisitAllRooms } from './06-841-keys-and-rooms'

/* eslint-disable */
const example = [
  [[[[1],[2],[3],[]]], true],
  [[[[1,3],[3,0,1],[2],[0]]], false],
  [[[[1,3], [3,0,1],[2, 4, 6], [2, 1, 0], [1,3], [1,2,3,4], [1,2,3,4]]], false]
]
/* eslint-enable */
describe('06-841-keys-and-rooms test', () => {
  it('expect-canVisitAllRooms', () => {
    example.forEach(item => {
      expect(canVisitAllRooms(...item[0])).toEqual(item[1])
      // expect(canVisitAllRooms(...item[0])).toBe(item[1])
    })
  })
})
