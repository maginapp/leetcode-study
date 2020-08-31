import { solution_dfs_save, solution_dfs, solution_dp_from_up, solution_dp_table_2, solution_dp_table } from './01-backpack-problem'

/* eslint-disable */
const example = [
  [[[2, 4, 3, 7], [2, 3, 5, 5], 10], 10],
  [[[2, 4, 3, 7], [2, 3, 5, 5], 8], 8],
  [[[2, 7, 3, 7, 4, 6, 5, 6, 2, 4], [2, 3, 5, 5, 3, 6, 5, 3, 2, 8], 16], 22]
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
  it('solution_dp_table_2', () => {
    example.forEach(item => {
      expect(solution_dp_table_2(...item[0])).toBe(item[1])
    })
  })
  it('solution_dp_table', () => {
    example.forEach(item => {
      expect(solution_dp_table(...item[0])).toBe(item[1])
    })
  })
})
