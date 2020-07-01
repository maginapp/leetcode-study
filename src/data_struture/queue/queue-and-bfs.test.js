import { numIslandsDfs, numIslands } from './queue-and-bfs'

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

describe('queue test', () => {
  it('expect-test1', () => {
    expect(numIslandsDfs(grid1)).toBe(1)
    expect(numIslandsDfs(grid2)).toBe(3)
    expect(numIslands(grid1)).toBe(1)
  })
})
