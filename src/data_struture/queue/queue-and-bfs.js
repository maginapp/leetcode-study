/*
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。

 

示例 1:

输入:
11110
11010
11000
00000
输出: 1
示例 2:

输入:
11000
11000
00100
00011
输出: 3
解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || !grid.length || !grid[0].length) return
  const rowL = grid.length
  const colL = grid[0].length
  const island = []
  let items = []
  let count = 0

  const director = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0]
  ]

  const bfs = (grid, i, j, items) => {
    if (grid[i][j] === 0 || items.includes(i + '-' + j)) return
    if (grid[i][j] === 1) {
      items.push(i + '-' + j)
    }
    let x, y
    for (let i1 = 0; i1 < director.length; i1++) {
      x = i + director[i1][0]
      y = j + director[i1][1]
      if (x >= rowL || x < 0 || y >= colL || y < 0) continue
      bfs(grid, x, y, items)
    }
  }

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; j < colL; j++) {
      if (grid[i][j] === 1 && !items.includes(i + '-' + j)) {
        count++
        bfs(grid, i, j, items)
      }
    }
  }

  return count
}

const grid1 = [[1, 1, 1, 1, 0], [1, 1, 0, 1, 0], [1, 1, 0, 0, 0], [0, 0, 0, 0, 0]]
const grid2 = [[1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 1]]

console.log(numIslands(grid1))
console.log(numIslands(grid2))
