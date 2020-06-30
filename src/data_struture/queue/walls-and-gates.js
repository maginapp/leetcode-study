/*
INF  -1  0  INF
INF INF INF  -1
INF  -1 INF  -1
  0  -1 INF INF

  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4


Leetcode 317.离建筑物最近的距离 Hard
Leetcode 489.扫地机器人 Hard
Leetcode 994.腐烂的橘子 Easy

*/

import Queue from './queue'

var wallsAndGates = function (rooms) {
  if (!rooms.length || !rooms[0].length) return rooms
  const cols = rooms[0].length
  const rows = rooms.length
  const dfs = (rooms, i, j, value) => {
    if (i < 0 || j < 0 || j >= cols || i >= rows) return
    if (rooms[i][j] < value) return
    rooms[i][j] = value
    dfs(rooms, i - 1, j, value + 1)
    dfs(rooms, i + 1, j, value + 1)
    dfs(rooms, i, j - 1, value + 1)
    dfs(rooms, i, j + 1, value + 1)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] === 0) dfs(rooms, i, j, 0)
    }
  }
  return rooms
}

export var wallsAndGates2 = function (rooms) {
  if (!rooms.length || !rooms[0].length) return rooms
  const cols = rooms[0].length
  const rows = rooms.length
  const queue = []
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rooms[i][j] === 0) queue.push({ i, j })
    }
  }

  while (queue.length) {
    let front = queue[0]
    let { i, j } = front
    queue.shift()
    if (i - 1 >= 0 && !(rooms[i - 1][j] < rooms[i][j] + 1)) {
      rooms[i - 1][j] = rooms[i][j] + 1
      queue.push({ i: i - 1, j })
    }

    if (i + 1 < rows && !(rooms[i + 1][j] < rooms[i][j] + 1)) {
      rooms[i + 1][j] = rooms[i][j] + 1
      queue.push({ i: i + 1, j })
    }

    if (j + 1 < cols && !(rooms[i][j + 1] < rooms[i][j] + 1)) {
      rooms[i][j + 1] = rooms[i][j] + 1
      queue.push({ i, j: j + 1 })
    }

    if (j - 1 >= 0 && !(rooms[i][j - 1] < rooms[i][j] + 1)) {
      rooms[i][j - 1] = rooms[i][j] + 1
      queue.push({ i, j: j - 1 })
    }
  }

  return rooms
}

export default wallsAndGates

wallsAndGates2([
  ['INF', -1, 0, 'INF'],
  ['INF', 'INF', 'INF', -1],
  ['INF', -1, 'INF', -1],
  [0, -1, 'INF', 'INF']
])
