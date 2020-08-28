import { solution_dfs_save, solution_dfs, solution_dp_from_up } from './01-backpack-problem'

/* eslint-disable */
const example = [
  [[[2, 4, 3, 7], [2, 3, 5, 5], 10], 10],
  [[[2, 4, 3, 7], [2, 3, 5, 5], 8]],
  [[[2, 7, 3, 7, 4, 6, 5, 6, 2, 4], [2, 3, 5, 5, 3, 6, 5, 3, 2, 8], 22]]
]
/* eslint-enable */

describe('01-backpack-problem', () => {
  it('solution_dfs_save', () => {
    example.forEach(item => {
      expect(solution_dfs_save(...item[0])).toBe(item[1])
    })
  })
  it('solution_dfs', () => {
    example.forEach(item => {
      expect(solution_dfs(...item[0])).toBe(item[1])
    })
  })
  it('solution_dp_from_up', () => {
    example.forEach(item => {
      expect(solution_dp_from_up(...item[0])).toBe(item[1])
    })
  })
})
