import { numIslandsDfs, numIslands } from './water-and-island'

const grid1 = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
]
const grid2 = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]

const grid3 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0']
]

describe('queue test', () => {
  it('expect-numIslandsDfs', () => {
    expect(numIslandsDfs(grid1)).toBe(1)
    expect(numIslandsDfs(grid3)).toBe(1)
    expect(numIslandsDfs(grid2)).toBe(3)
    expect(numIslandsDfs([])).toBe(0)
  })
  it('expect-numIslands', () => {
    expect(numIslands(grid1)).toBe(1)
    expect(numIslands(grid3)).toBe(1)
    expect(numIslands(grid2)).toBe(3)
    expect(numIslands([])).toBe(0)
  })
})
