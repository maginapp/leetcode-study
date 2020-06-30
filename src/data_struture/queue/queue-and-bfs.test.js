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
  const items = []
  const count = 0

  const director = [
    [0, -1],
    [0, 1],
    [1, 0],
    [-1, 0]
  ]

  const bfs = (gird, i, j, items) => {
    if (grid[i][j] === 1) {
      items.push(i + '-' + j)
    }
    if (gird[i][j] === 0) return
    let x, y
    for (let i = 0; i < director.length; i++) {
      x = i + director[i][0]
      y = j + director[i][1]
      if (x >= rowL || x < 0 || y >= colL || y < 0) return
      bfs(gird, x, y, items)
    }
  }

  for (let i = 0; i < rowL; i++) {
    for (let j = 0; i < colL; j++) {
      if (grid[i][j] === 1 && !items.includes(i + '-' + j)) {
        bfs(gird, i, j)
      }
    }
  }
}
